import { app } from "./app";
import './db'
import './models/Video'
import './models/Comments'

const PORT = 4000

const handleListening = () => {
    console.log(`Server start on port ${PORT}`)
}

app.listen(PORT, handleListening)