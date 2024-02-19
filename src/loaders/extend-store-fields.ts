export default async function () {
  // Assuming there's an admin route file for store-related operations. Adjust the path as needed.
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/admin/store/index"
  )) as any;

  // Extend allowed fields to include custom attributes or relations
  if (imports.allowedStoreFields) {
    imports.allowedStoreFields = [
      ...imports.allowedStoreFields,
      // Add custom store fields here if any
    ];
  }

  // Extend default relations to always return the 'members' relation
  if (imports.defaultStoreRelations) {
    imports.defaultStoreRelations = [
      ...imports.defaultStoreRelations,
      "members", // Assuming 'members' is the relation you added in your Store entity
    ];
  }
}