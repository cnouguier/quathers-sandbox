import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import reactive from 'feathers-reactive'
import rxjs from 'rxjs'

const socket = io('http://localhost:3030', {transports: ['websocket']})

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))
  .configure(reactive(rxjs, {idField: '_id'}))

api.service('/users')
api.service('/groups')
api.service('/organizations')

export default api
