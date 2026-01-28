const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProject: String(import.meta.env.VITE_PROJECT_ID),
    appwriteKey: String(import.meta.env.VITE_BUCKET_KEY),
    appwriteDatabase: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollection: String(import.meta.env.VITE_COLLECTION_ID),
}
export default conf