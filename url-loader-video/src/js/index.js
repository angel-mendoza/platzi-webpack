import '../css/style.css'
import { firstMessage } from './message.js'
import videoPlatzi from '../video/que-es-core.mp4'

document.write(firstMessage);

const video = document.createElement('video')
video.setAttribute('src', videoPlatzi)
video.setAttribute('width', 480)
video.autoplay = true
video.setAttribute('controls', true)
document.body.append(video)

console.log("Hola mundo! desde Webpack -- editado")