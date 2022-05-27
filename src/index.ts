import config from "config"

import { setupServer } from "./server"
import { connectToDatabase } from "./db"


const port = config.get("SERVICE_PORT")

connectToDatabase()

const app = setupServer()
 
app.listen(port, () => {
  console.log(`⚡️[server]: Server is listening at ${port}`)
})
