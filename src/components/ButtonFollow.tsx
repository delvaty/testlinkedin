"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const ButtonFollow = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <Button
      className={
        isFollowed ? "bg-transparent text-foreground border-default-200" : ""
      }
      color="primary"
      radius="full"
      size="sm"
      variant={isFollowed ? "bordered" : "solid"}
      onPress={() => setIsFollowed(!isFollowed)}
    >
      {isFollowed ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default ButtonFollow;
