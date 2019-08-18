import { app } from "./app";
import './db'

const PORT = 4000

const handleListening = () => {
    console.log(`Server start on port ${PORT}`)
}

app.listen(PORT, handleListening)