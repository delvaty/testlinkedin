
import React from "react";
import { InformationType } from "../lib/types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import ButtonFollow from "./ButtonFollow";

interface Props {
  informationData: InformationType[];
}

const Information = ({ informationData }: Props) => {
  

  const formatDate = (date: Date) => {
    return date.toLocaleString(); // Formateo de fecha y hora
  };


  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-3 mx-3 ">
      {informationData.map((item) => (
        <Card className="max-w-[350px]" key={item.id}>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://nextui.org/images/fruit-1.jpeg"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {item.sender_name}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {formatDate(new Date(item.message_date))}
                </h5>
              </div>
            </div>
            <ButtonFollow/>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>{item.message_text}</p>
            <span className="pt-2">
              #FrontendWithDelvaty
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3 ">
            <div className="flex gap-1 flex-col ">
              <p className="font-semibold text-default-400 text-small">
                Number received
              </p>
              <p className="text-small text-green-500 ">
                {item.received_number}
              </p>
            </div>
            <div className="flex gap-1 flex-col">
              <p className="font-semibold text-default-400 text-small">
                Number Send
              </p>
              <p className="text-red-500 text-small ">{item.sender_number}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Information;
