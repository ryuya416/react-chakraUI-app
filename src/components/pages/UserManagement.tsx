import { memo, VFC } from "react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/layout";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="たろう"
          fullName="tarou yamada"
        />
      </WrapItem>
    </Wrap>
  );
});
