import { prisma } from '../../../../database/prismaClient';

//a ideia e atualizar a entrega(delivery) informando o entregador. Eis o motivo pelo qual ele pega
//a id da entrega e informa o id do entregador(deliveryman).

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {

    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    })
    return result;
  }
}