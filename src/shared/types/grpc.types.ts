import { ServerUnaryCall } from "@grpc/grpc-js"
import { status } from "@grpc/grpc-js"

export namespace Grpc {
	export type Call<RequestType = any, ResponseType = any> = ServerUnaryCall<
		RequestType,
		ResponseType
	>

	export enum Args {
		DATA = 0,
		METADATA = 1,
		CALL = 2
	}

	export const Status = { ...status }
}
