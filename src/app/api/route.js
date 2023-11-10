




export async function GET(request) {
	const searchParams = request.nextUrl.searchParams
	const query = searchParams.get('page')
	const response = await fetch(`https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?page=${query}&pair_ID=1057391&time_utc_offset=28800&lang_ID=1`, {
		method: 'GET',
		headers: {
		  'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
		  'x-rapidapi-key': '190b5a128bmshd145511e4a6ffb1p1f47b5jsn5c040d440ed2',
		},
	  });
  try {
 const data = await response.json();
 return Response.json({ data });
  } catch (error) {
    console.error(error);
  }
}
