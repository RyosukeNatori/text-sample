import { IAMClient, ListUsersCommand,ListMFADevicesCommand } from "@aws-sdk/client-iam";

export const handler = async (event) => {
  const client = new IAMClient();
  const command = new ListUsersCommand();
  const response = await client.send(command);
  console.log(response);

  const command2 = new ListMFADevicesCommand({UserName:"test2"});
  const response2 = await client.send(command2);
  console.log(response2);
};
