const connectToDatabase = require('./db') // initialize connection

// simple Error constructor for handling HTTP error code
function HTTPError(statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

module.exports.healthCheck = async () => {
  await connectToDatabase()
  console.log('Connection successful.')
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Connection successful.' })
  }
}

module.exports.create = async (event) => {
  try {
    const { Ticket: Ticket } = await connectToDatabase()
    const ticket = await Ticket.create(JSON.parse(event.body))
    return {
      statusCode: 200,
      body: JSON.stringify(ticket)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not create the ticket.'
    }
  }
}

module.exports.getOne = async (event) => {
  try {
    const { Ticket } = await connectToDatabase()
    const ticket = await Ticket.findByPk(event.pathParameters.id)
    if (!ticket) throw new HTTPError(404, `Ticket with id: ${event.pathParameters.id} was not found`)
    return {
      statusCode: 200,
      body: JSON.stringify(ticket)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could not fetch the Ticket.'
    }
  }
}

module.exports.getAll = async () => {
  try {
    const { Ticket } = await connectToDatabase()
    const tickets = await Ticket.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(tickets)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not fetch the tickets.'
    }
  }
}

module.exports.update = async (event) => {
  try {
    const input = JSON.parse(event.body)
    const { Ticket } = await connectToDatabase()
    const ticket = await Ticket.findByPk(event.pathParameters.id)
    if (!ticket) throw new HTTPError(404, `Ticket with id: ${event.pathParameters.id} was not found`)
    if (input.name) ticket.name = input.name
    if (input.lastname) ticket.lastname = input.lastname
    if (input.email) ticket.email = input.email
    if (input.departament) ticket.departament = input.departament
    if (input.registrationCode) ticket.registrationCode = input.registrationCode
    if (input.description) ticket.description = input.description
    await ticket.save()
    return {
      statusCode: 200,
      body: JSON.stringify(ticket)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could not update the Ticket.'
    }
  }
}

module.exports.destroy = async (event) => {
  try {
    const { Ticket } = await connectToDatabase()
    const ticket = await Ticket.findByPk(event.pathParameters.id)
    if (!ticket) throw new HTTPError(404, `Ticket with id: ${event.pathParameters.id} was not found`)
    await ticket.destroy()
    return {
      statusCode: 200,
      body: JSON.stringify(ticket)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could destroy fetch the Ticket.'
    }
  }
}