import task from "@/lib/taskData";

export async function GET(req) {
  const data = task;

  const pageNumber = parseInt(req.nextUrl.searchParams.get("pageNumber")) || 1
  const itemsPerPage = parseInt(req.nextUrl.searchParams.get("itemsPerPage")) || 5

  console.log(`pageNumber: ${pageNumber}, itemsPerPage: ${itemsPerPage}`)

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = data.slice(startIndex, endIndex);

  console.log(endIndex)

  return Response.json({
    total: data.length,
    items: pageData,
  });
}
