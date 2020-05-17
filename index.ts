import { serve } from "https://deno.land/std@master/http/server.ts";

const server = serve({
	port: 3001,
	hostname: '0.0.0.0',
});

console.log("The server running on: http://localhost:3001");

for await (const request of server) {
	request.respond({
		body: "Hello World\n",
	});
}