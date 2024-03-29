import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
const UserListItem = ({ handleFunction,user }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Library Id : </b>
          {user.email}
        </Text>
        <Text fontSize="xs">
          <b>Development,Year : </b>
          {user.detail}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;