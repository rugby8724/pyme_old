export default async function () {
  // Assuming there's an admin route file for user-related operations. Adjust the path as needed.
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/admin/users/index"
  )) as any;

  // Extend allowed fields to include 'store_id'
  if (imports.allowedUserFields) {
    imports.allowedUserFields = [
      ...imports.allowedUserFields,
      "store_id", // Reflecting the store_id field in the User entity
    ];
  }

  // Extend default relations to always return the 'store' relation
  if (imports.defaultUserRelations) {
    imports.defaultUserRelations = [
      ...imports.defaultUserRelations,
      "store", // Assuming 'store' is the relation you added in your User entity
    ];
  }
}