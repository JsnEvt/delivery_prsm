import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';


export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    //o usuario estara autenticado, portanto poderei pegar o id do cliente pelo request

    const { id_client } = request

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
    const deliveries = await findAllDeliveriesUseCase.execute(id_client)

    return response.json(deliveries)
  }
}