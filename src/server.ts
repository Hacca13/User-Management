import express, { Express } from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import { swaggerDocument } from "./swagger"

import { userRoutes } from "./routes"
import { errorMessage } from "./middleware"

export const setupServer = (): Express => {
  const app: Express = express()

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(express.json())
  app.use("/", userRoutes)

  //error middleware
  app.use(errorMessage)

  return app
}
