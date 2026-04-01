import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

type AppwriteConfig = {
  endpoint: string;
  projectId: string;
  platform: string;
  databaseId: string;
  usersCollectionId: string;
};

export const appwriteConfig: AppwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "",
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM ?? "com.isuus24.org",
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID ?? "",
  usersCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID ?? "",
};

export const appwriteClient = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const account = new Account(appwriteClient);
export const databases = new Databases(appwriteClient);
export const avatars = new Avatars(appwriteClient);

export async function getCurrentAccount() {
  return account.get();
}

export async function signInWithEmail(email: string, password: string) {
  return account.createEmailPasswordSession(email, password);
}

export async function signOut() {
  return account.deleteSession("current");
}

export async function signUpWithEmail(params: {
  name: string;
  email: string;
  password: string;
}) {
  const createdAccount = await account.create(
    ID.unique(),
    params.email,
    params.password,
    params.name,
  );

  const avatarUrl = avatars.getInitials(params.name);

  if (appwriteConfig.databaseId && appwriteConfig.usersCollectionId) {
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        name: params.name,
        email: params.email,
        accountId: createdAccount.$id,
        avatar: avatarUrl,
      },
    );
  }

  await signInWithEmail(params.email, params.password);
  return createdAccount;
}
