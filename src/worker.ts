export default {
	async fetch(_request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
		return Response.redirect('https://discord.gg/Uubthkfzvv');
	},
};
