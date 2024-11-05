/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^7
 */
import { AlgorandClientInterface } from '@algorandfoundation/algokit-utils/types/algorand-client-interface'
import { ABIReturn, AppReturn, SendAppTransactionResult } from '@algorandfoundation/algokit-utils/types/app'
import { Arc56Contract, getArc56ReturnValue, getABIStructFromABITuple } from '@algorandfoundation/algokit-utils/types/app-arc56'
import {
  AppClient,
  AppClientMethodCallParams,
  AppClientParams,
  AppClientBareCallParams,
  CallOnComplete,
  AppClientCompilationParams,
  ResolveAppClientByCreatorAndName,
  ResolveAppClientByNetwork,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppFactory, AppFactoryAppClientParams, AppFactoryResolveAppClientByCreatorAndNameParams, AppFactoryDeployParams, AppFactoryParams, CreateSchema } from '@algorandfoundation/algokit-utils/types/app-factory'
import AlgoKitComposer, { AppCallMethodCall, AppMethodCallTransactionArgument, SimulateOptions } from '@algorandfoundation/algokit-utils/types/composer'
import { SendParams, SendSingleTransactionResult, SendAtomicTransactionComposerResults } from '@algorandfoundation/algokit-utils/types/transaction'
import { modelsv2, OnApplicationComplete, Transaction, TransactionSigner } from 'algosdk'
import SimulateResponse = modelsv2.SimulateResponse

export const APP_SPEC: Arc56Contract = {"name":"NestedContract","structs":{},"methods":[{"name":"add","args":[{"type":"uint64","name":"a"},{"type":"uint64","name":"b"}],"returns":{"type":"uint64"},"actions":{"create":[],"call":["NoOp"]},"readonly":false,"events":[],"recommendations":{}},{"name":"get_pay_txn_amount","args":[{"type":"pay","name":"pay_txn"}],"returns":{"type":"uint64"},"actions":{"create":[],"call":["NoOp"]},"readonly":false,"events":[],"recommendations":{}},{"name":"nested_method_call","args":[{"type":"pay","name":"_"},{"type":"appl","name":"method_call"}],"returns":{"type":"byte[]"},"actions":{"create":[],"call":["NoOp"]},"readonly":false,"events":[],"recommendations":{}}],"arcs":[22,28],"networks":{},"state":{"schema":{"global":{"ints":0,"bytes":0},"local":{"ints":0,"bytes":0}},"keys":{"global":{},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{}}},"bareActions":{"create":["NoOp"],"call":[]},"sourceInfo":{"approval":[{"pc":[57,79,105],"errorMessage":"OnCompletion is not NoOp"},{"pc":[148],"errorMessage":"can only call when creating"},{"pc":[60,82,108],"errorMessage":"can only call when not creating"},{"pc":[130],"errorMessage":"transaction type is appl"},{"pc":[92,119],"errorMessage":"transaction type is pay"}],"clear":[]},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDEwCgpleGFtcGxlcy5uZXN0ZWQubmVzdGVkLk5lc3RlZENvbnRyYWN0LmFwcHJvdmFsX3Byb2dyYW06CiAgICBpbnRjYmxvY2sgMSAwCiAgICBieXRlY2Jsb2NrIDB4MTUxZjdjNzUKICAgIGNhbGxzdWIgX19wdXlhX2FyYzRfcm91dGVyX18KICAgIHJldHVybgoKCi8vIGV4YW1wbGVzLm5lc3RlZC5uZXN0ZWQuTmVzdGVkQ29udHJhY3QuX19wdXlhX2FyYzRfcm91dGVyX18oKSAtPiB1aW50NjQ6Cl9fcHV5YV9hcmM0X3JvdXRlcl9fOgogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo0CiAgICAvLyBjbGFzcyBOZXN0ZWRDb250cmFjdChBUkM0Q29udHJhY3QpOgogICAgcHJvdG8gMCAxCiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogX19wdXlhX2FyYzRfcm91dGVyX19fYmFyZV9yb3V0aW5nQDcKICAgIHB1c2hieXRlc3MgMHhmZTZiZGY2OSAweDlmZDgzNWY4IDB4ZDdhMzE2ODYgLy8gbWV0aG9kICJhZGQodWludDY0LHVpbnQ2NCl1aW50NjQiLCBtZXRob2QgImdldF9wYXlfdHhuX2Ftb3VudChwYXkpdWludDY0IiwgbWV0aG9kICJuZXN0ZWRfbWV0aG9kX2NhbGwocGF5LGFwcGwpYnl0ZVtdIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggX19wdXlhX2FyYzRfcm91dGVyX19fYWRkX3JvdXRlQDIgX19wdXlhX2FyYzRfcm91dGVyX19fZ2V0X3BheV90eG5fYW1vdW50X3JvdXRlQDMgX19wdXlhX2FyYzRfcm91dGVyX19fbmVzdGVkX21ldGhvZF9jYWxsX3JvdXRlQDQKICAgIGludGNfMSAvLyAwCiAgICByZXRzdWIKCl9fcHV5YV9hcmM0X3JvdXRlcl9fX2FkZF9yb3V0ZUAyOgogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo1CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIHR4biBPbkNvbXBsZXRpb24KICAgICEKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gaXMgbm90IE5vT3AKICAgIHR4biBBcHBsaWNhdGlvbklECiAgICBhc3NlcnQgLy8gY2FuIG9ubHkgY2FsbCB3aGVuIG5vdCBjcmVhdGluZwogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo0CiAgICAvLyBjbGFzcyBOZXN0ZWRDb250cmFjdChBUkM0Q29udHJhY3QpOgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo1CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgYWRkCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19nZXRfcGF5X3R4bl9hbW91bnRfcm91dGVAMzoKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6OQogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6NAogICAgLy8gY2xhc3MgTmVzdGVkQ29udHJhY3QoQVJDNENvbnRyYWN0KToKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzAgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgaW50Y18wIC8vIHBheQogICAgPT0KICAgIGFzc2VydCAvLyB0cmFuc2FjdGlvbiB0eXBlIGlzIHBheQogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo5CiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgZ2V0X3BheV90eG5fYW1vdW50CiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19uZXN0ZWRfbWV0aG9kX2NhbGxfcm91dGVANDoKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6MTMKICAgIC8vIEBhcmM0LmFiaW1ldGhvZAogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBleGFtcGxlcy9uZXN0ZWQvbmVzdGVkLnB5OjQKICAgIC8vIGNsYXNzIE5lc3RlZENvbnRyYWN0KEFSQzRDb250cmFjdCk6CiAgICB0eG4gR3JvdXBJbmRleAogICAgcHVzaGludCAyIC8vIDIKICAgIC0KICAgIGR1cAogICAgZ3R4bnMgVHlwZUVudW0KICAgIGludGNfMCAvLyBwYXkKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBwYXkKICAgIHR4biBHcm91cEluZGV4CiAgICBpbnRjXzAgLy8gMQogICAgLQogICAgZHVwCiAgICBndHhucyBUeXBlRW51bQogICAgcHVzaGludCA2IC8vIGFwcGwKICAgID09CiAgICBhc3NlcnQgLy8gdHJhbnNhY3Rpb24gdHlwZSBpcyBhcHBsCiAgICAvLyBleGFtcGxlcy9uZXN0ZWQvbmVzdGVkLnB5OjEzCiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIGNhbGxzdWIgbmVzdGVkX21ldGhvZF9jYWxsCiAgICBieXRlY18wIC8vIDB4MTUxZjdjNzUKICAgIHN3YXAKICAgIGNvbmNhdAogICAgbG9nCiAgICBpbnRjXzAgLy8gMQogICAgcmV0c3ViCgpfX3B1eWFfYXJjNF9yb3V0ZXJfX19iYXJlX3JvdXRpbmdANzoKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6NAogICAgLy8gY2xhc3MgTmVzdGVkQ29udHJhY3QoQVJDNENvbnRyYWN0KToKICAgIHR4biBPbkNvbXBsZXRpb24KICAgIGJueiBfX3B1eWFfYXJjNF9yb3V0ZXJfX19hZnRlcl9pZl9lbHNlQDExCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgaW50Y18wIC8vIDEKICAgIHJldHN1YgoKX19wdXlhX2FyYzRfcm91dGVyX19fYWZ0ZXJfaWZfZWxzZUAxMToKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6NAogICAgLy8gY2xhc3MgTmVzdGVkQ29udHJhY3QoQVJDNENvbnRyYWN0KToKICAgIGludGNfMSAvLyAwCiAgICByZXRzdWIKCgovLyBleGFtcGxlcy5uZXN0ZWQubmVzdGVkLk5lc3RlZENvbnRyYWN0LmFkZChhOiBieXRlcywgYjogYnl0ZXMpIC0+IGJ5dGVzOgphZGQ6CiAgICAvLyBleGFtcGxlcy9uZXN0ZWQvbmVzdGVkLnB5OjUtNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICAvLyBkZWYgYWRkKHNlbGYsIGE6IGFyYzQuVUludDY0LCBiOiBhcmM0LlVJbnQ2NCkgLT4gYXJjNC5VSW50NjQ6CiAgICBwcm90byAyIDEKICAgIC8vIGV4YW1wbGVzL25lc3RlZC9uZXN0ZWQucHk6NwogICAgLy8gcmV0dXJuIGFyYzQuVUludDY0KGEubmF0aXZlICsgYi5uYXRpdmUpCiAgICBmcmFtZV9kaWcgLTIKICAgIGJ0b2kKICAgIGZyYW1lX2RpZyAtMQogICAgYnRvaQogICAgKwogICAgaXRvYgogICAgcmV0c3ViCgoKLy8gZXhhbXBsZXMubmVzdGVkLm5lc3RlZC5OZXN0ZWRDb250cmFjdC5nZXRfcGF5X3R4bl9hbW91bnQocGF5X3R4bjogdWludDY0KSAtPiBieXRlczoKZ2V0X3BheV90eG5fYW1vdW50OgogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weTo5LTEwCiAgICAvLyBAYXJjNC5hYmltZXRob2QKICAgIC8vIGRlZiBnZXRfcGF5X3R4bl9hbW91bnQoc2VsZiwgcGF5X3R4bjogZ3R4bi5QYXltZW50VHJhbnNhY3Rpb24pIC0+IGFyYzQuVUludDY0OgogICAgcHJvdG8gMSAxCiAgICAvLyBleGFtcGxlcy9uZXN0ZWQvbmVzdGVkLnB5OjExCiAgICAvLyByZXR1cm4gYXJjNC5VSW50NjQocGF5X3R4bi5hbW91bnQpCiAgICBmcmFtZV9kaWcgLTEKICAgIGd0eG5zIEFtb3VudAogICAgaXRvYgogICAgcmV0c3ViCgoKLy8gZXhhbXBsZXMubmVzdGVkLm5lc3RlZC5OZXN0ZWRDb250cmFjdC5uZXN0ZWRfbWV0aG9kX2NhbGwoXzogdWludDY0LCBtZXRob2RfY2FsbDogdWludDY0KSAtPiBieXRlczoKbmVzdGVkX21ldGhvZF9jYWxsOgogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weToxMy0xNgogICAgLy8gQGFyYzQuYWJpbWV0aG9kCiAgICAvLyBkZWYgbmVzdGVkX21ldGhvZF9jYWxsKAogICAgLy8gICAgIHNlbGYsIF86IGd0eG4uUGF5bWVudFRyYW5zYWN0aW9uLCBtZXRob2RfY2FsbDogZ3R4bi5BcHBsaWNhdGlvbkNhbGxUcmFuc2FjdGlvbgogICAgLy8gKSAtPiBhcmM0LkR5bmFtaWNCeXRlczoKICAgIHByb3RvIDIgMQogICAgLy8gZXhhbXBsZXMvbmVzdGVkL25lc3RlZC5weToxNwogICAgLy8gcmV0dXJuIGFyYzQuRHluYW1pY0J5dGVzKG1ldGhvZF9jYWxsLnR4bl9pZCkKICAgIGZyYW1lX2RpZyAtMQogICAgZ3R4bnMgVHhJRAogICAgZHVwCiAgICBsZW4KICAgIGl0b2IKICAgIGV4dHJhY3QgNiAyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIHJldHN1Ygo=","clear":"I3ByYWdtYSB2ZXJzaW9uIDEwCgpleGFtcGxlcy5uZXN0ZWQubmVzdGVkLk5lc3RlZENvbnRyYWN0LmNsZWFyX3N0YXRlX3Byb2dyYW06CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg=="},"events":[],"templateVariables":{}} as unknown as Arc56Contract

/**
 * A state record containing binary data
 */
export interface BinaryState {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array | undefined
  /**
   * Gets the state value as a string
   */
  asString(): string | undefined
}

class BinaryStateValue implements BinaryState {
  constructor(private value: Uint8Array | undefined) {}

  asByteArray(): Uint8Array | undefined {
    return this.value
  }

  asString(): string | undefined {
    return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined
  }
}

/**
 * Expands types for IntelliSense so they are more human readable
 * See https://stackoverflow.com/a/69288824
 */
export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never


/**
 * The argument types for the NestedContract contract
 */
export type NestedContractArgs = {
  /**
   * The object representation of the arguments for each method
   */
  obj: {
    'add(uint64,uint64)uint64': {
      a: bigint | number
      b: bigint | number
    }
    'get_pay_txn_amount(pay)uint64': {
      payTxn: AppMethodCallTransactionArgument
    }
    'nested_method_call(pay,appl)byte[]': {
      _: AppMethodCallTransactionArgument
      methodCall: AppMethodCallTransactionArgument
    }
  }
  /**
   * The tuple representation of the arguments for each method
   */
  tuple: {
    'add(uint64,uint64)uint64': [a: bigint | number, b: bigint | number]
    'get_pay_txn_amount(pay)uint64': [payTxn: AppMethodCallTransactionArgument]
    'nested_method_call(pay,appl)byte[]': [_: AppMethodCallTransactionArgument, methodCall: AppMethodCallTransactionArgument]
  }
}

/**
 * The return type for each method
 */
export type NestedContractReturns = {
  'add(uint64,uint64)uint64': bigint
  'get_pay_txn_amount(pay)uint64': bigint
  'nested_method_call(pay,appl)byte[]': Uint8Array
}

/**
 * Defines the types of available calls and state of the NestedContract smart contract.
 */
export type NestedContractTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'add(uint64,uint64)uint64' | 'add', {
      argsObj: NestedContractArgs['obj']['add(uint64,uint64)uint64']
      argsTuple: NestedContractArgs['tuple']['add(uint64,uint64)uint64']
      returns: NestedContractReturns['add(uint64,uint64)uint64']
    }>
    & Record<'get_pay_txn_amount(pay)uint64' | 'get_pay_txn_amount', {
      argsObj: NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64']
      argsTuple: NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']
      returns: NestedContractReturns['get_pay_txn_amount(pay)uint64']
    }>
    & Record<'nested_method_call(pay,appl)byte[]' | 'nested_method_call', {
      argsObj: NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]']
      argsTuple: NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']
      returns: NestedContractReturns['nested_method_call(pay,appl)byte[]']
    }>
}

/**
 * Defines the possible abi call signatures.
 */
export type NestedContractSignatures = keyof NestedContractTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type NestedContractNonVoidMethodSignatures = keyof NestedContractTypes['methods'] extends infer T ? T extends keyof NestedContractTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
export type CallParams<TArgs> = Expand<
  Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> &
    {
      /** The args for the ABI method call, either as an ordered array or an object */
      args: Expand<TArgs>
    }
>
/**
 * Maps a method signature from the NestedContract smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends NestedContractSignatures> = NestedContractTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the NestedContract smart contract to the method's return type
 */
export type MethodReturn<TSignature extends NestedContractSignatures> = NestedContractTypes['methods'][TSignature]['returns']


/**
 * Defines supported create method params for this smart contract
 */
export type NestedContractCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: undefined} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines arguments required for the deploy method.
 */
export type NestedContractDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: NestedContractCreateCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the NestedContract smart contract
 */
export abstract class NestedContractParamsFactory {
  /**
   * Constructs a no op call for the add(uint64,uint64)uint64 ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static add(params: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'add(uint64,uint64)uint64' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.a, params.args.b],
    }
  }
  /**
   * Constructs a no op call for the get_pay_txn_amount(pay)uint64 ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static getPayTxnAmount(params: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'get_pay_txn_amount(pay)uint64' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.payTxn],
    }
  }
  /**
   * Constructs a no op call for the nested_method_call(pay,appl)byte[] ABI method
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static nestedMethodCall(params: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'nested_method_call(pay,appl)byte[]' as const,
      args: Array.isArray(params.args) ? params.args : [params.args._, params.args.methodCall],
    }
  }
}

/**
 * A factory to create and deploy one or more instance of the NestedContract smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class NestedContractFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: AppFactory

  /**
   * Creates a new instance of `NestedContractFactory`
   *
   * @param params The parameters to initialise the app factory with
   */
  constructor(params: Omit<AppFactoryParams, 'appSpec'>) {
    this.appFactory = new AppFactory({
      ...params,
      appSpec: APP_SPEC,
    })
  }
  
  /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
  public get appName() {
    return this.appFactory.appName
  }
  
  /** The ARC-56 app spec being used */
  get appSpec() {
    return APP_SPEC
  }
  
  /** A reference to the underlying `AlgorandClient` this app factory is using. */
  public get algorand(): AlgorandClientInterface {
    return this.appFactory.algorand
  }
  
  /**
   * Returns a new `AppClient` client for an app instance of the given ID.
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public getAppClientById(params: AppFactoryAppClientParams) {
    return new NestedContractClient(this.appFactory.getAppClientById(params))
  }
  
  /**
   * Returns a new `AppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public async getAppClientByCreatorAndName(
    params: AppFactoryResolveAppClientByCreatorAndNameParams,
  ) {
    return new NestedContractClient(await this.appFactory.getAppClientByCreatorAndName(params))
  }

  /**
   * Idempotently deploys the NestedContract smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: NestedContractDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
    })
    return { result: result.result, appClient: new NestedContractClient(result.appClient) }
  }

  /**
   * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
   */
  readonly params = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the NestedContract smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a create call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        return this.appFactory.params.bare.create(params)
      },
    },

  }

  /**
   * Create transactions for the current app
   */
  readonly createTransaction = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the NestedContract smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a create call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        return this.appFactory.params.bare.create(params)
      },
    },

  }

  /**
   * Send calls to the current app
   */
  readonly send = {
    /**
     * Gets available create methods
     */
    create: {
      /**
       * Creates a new instance of the NestedContract smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The create result
       */
      bare: async (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        const result = await this.appFactory.send.bare.create(params)
        return { result: result.result, appClient: new NestedContractClient(result.appClient) }
      },
    },

  }

}
/**
 * A client to make calls to the NestedContract smart contract
 */
export class NestedContractClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: AppClient

  /**
   * Creates a new instance of `NestedContractClient`
   *
   * @param appClient An `AppClient` instance which has been created with the NestedContract app spec
   */
  constructor(appClient: AppClient)
  /**
   * Creates a new instance of `NestedContractClient`
   *
   * @param params The parameters to initialise the app client with
   */
  constructor(params: Omit<AppClientParams, 'appSpec'>)
  constructor(appClientOrParams: AppClient | Omit<AppClientParams, 'appSpec'>) {
    this.appClient = appClientOrParams instanceof AppClient ? appClientOrParams : new AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue<TSignature extends NestedContractNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined
  }
  
  /**
   * Returns a new `NestedContractClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  public static async fromCreatorAndName(params: Omit<ResolveAppClientByCreatorAndName, 'appSpec'>): Promise<NestedContractClient> {
    return new NestedContractClient(await AppClient.fromCreatorAndName({...params, appSpec: APP_SPEC}))
  }
  
  /**
   * Returns an `NestedContractClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(
    params: Omit<ResolveAppClientByNetwork, 'appSpec'>
  ): Promise<NestedContractClient> {
    return new NestedContractClient(await AppClient.fromNetwork({...params, appSpec: APP_SPEC}))
  }
  
  /** The ID of the app instance this client is linked to. */
  public get appId() {
    return this.appClient.appId
  }
  
  /** The app address of the app instance this client is linked to. */
  public get appAddress() {
    return this.appClient.appAddress
  }
  
  /** The name of the app. */
  public get appName() {
    return this.appClient.appName
  }
  
  /** The ARC-56 app spec being used */
  public get appSpec() {
    return this.appClient.appSpec
  }
  
  /** A reference to the underlying `AlgorandClient` this app client is using. */
  public get algorand(): AlgorandClientInterface {
    return this.appClient.algorand
  }

  /**
   * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
   */
  readonly params = {
    /**
     * Makes a clear_state call to an existing instance of the NestedContract smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.params.bare.clearState(params)
    },

    /**
     * Makes a call to the NestedContract smart contract using the `add(uint64,uint64)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    add: (params: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(NestedContractParamsFactory.add(params))
    },

    /**
     * Makes a call to the NestedContract smart contract using the `get_pay_txn_amount(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    getPayTxnAmount: (params: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(NestedContractParamsFactory.getPayTxnAmount(params))
    },

    /**
     * Makes a call to the NestedContract smart contract using the `nested_method_call(pay,appl)byte[]` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    nestedMethodCall: (params: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(NestedContractParamsFactory.nestedMethodCall(params))
    },

  }

  /**
   * Create transactions for the current app
   */
  readonly createTransaction = {
    /**
     * Makes a clear_state call to an existing instance of the NestedContract smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.createTransaction.bare.clearState(params)
    },

    /**
     * Makes a call to the NestedContract smart contract using the `add(uint64,uint64)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    add: (params: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(NestedContractParamsFactory.add(params))
    },

    /**
     * Makes a call to the NestedContract smart contract using the `get_pay_txn_amount(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    getPayTxnAmount: (params: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(NestedContractParamsFactory.getPayTxnAmount(params))
    },

    /**
     * Makes a call to the NestedContract smart contract using the `nested_method_call(pay,appl)byte[]` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    nestedMethodCall: (params: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(NestedContractParamsFactory.nestedMethodCall(params))
    },

  }

  /**
   * Send calls to the current app
   */
  readonly send = {
    /**
     * Makes a clear_state call to an existing instance of the NestedContract smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams & SendParams>) => {
      return this.appClient.send.bare.clearState(params)
    },

    /**
     * Makes a call to the NestedContract smart contract using the `add(uint64,uint64)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    add: async (params: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(NestedContractParamsFactory.add(params))
      return {...result, return: result.return as undefined | NestedContractReturns['add(uint64,uint64)uint64']}
    },

    /**
     * Makes a call to the NestedContract smart contract using the `get_pay_txn_amount(pay)uint64` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    getPayTxnAmount: async (params: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(NestedContractParamsFactory.getPayTxnAmount(params))
      return {...result, return: result.return as undefined | NestedContractReturns['get_pay_txn_amount(pay)uint64']}
    },

    /**
     * Makes a call to the NestedContract smart contract using the `nested_method_call(pay,appl)byte[]` ABI method.
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    nestedMethodCall: async (params: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(NestedContractParamsFactory.nestedMethodCall(params))
      return {...result, return: result.return as undefined | NestedContractReturns['nested_method_call(pay,appl)byte[]']}
    },

  }

  /**
   * Methods to access state for the current NestedContract app
   */
  state = {
  }

  public newGroup(): NestedContractComposer {
    const client = this
    const composer = this.algorand.newGroup()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      /**
       * Add a add(uint64,uint64)uint64 method call against the NestedContract contract
       */
      add(params: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.add(params)))
        resultMappers.push((v) => client.decodeReturnValue('add(uint64,uint64)uint64', v))
        return this
      },
      /**
       * Add a get_pay_txn_amount(pay)uint64 method call against the NestedContract contract
       */
      getPayTxnAmount(params: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.getPayTxnAmount(params)))
        resultMappers.push((v) => client.decodeReturnValue('get_pay_txn_amount(pay)uint64', v))
        return this
      },
      /**
       * Add a nested_method_call(pay,appl)byte[] method call against the NestedContract contract
       */
      nestedMethodCall(params: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.nestedMethodCall(params)))
        resultMappers.push((v) => client.decodeReturnValue('nested_method_call(pay,appl)byte[]', v))
        return this
      },
      /**
       * Add a clear state call to the NestedContract contract
       */
      clearState(params: AppClientBareCallParams) {
        promiseChain = promiseChain.then(() => composer.addAppCall(client.params.clearState(params)))
        return this
      },
      addTransaction(txn: Transaction, signer?: TransactionSigner) {
        promiseChain = promiseChain.then(() => composer.addTransaction(txn, signer))
        return this
      },
      async composer() {
        await promiseChain
        return composer
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await composer.simulate(options)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      },
      async send(params?: SendParams) {
        await promiseChain
        const result = await composer.send(params)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      }
    } as unknown as NestedContractComposer
  }
}
export type NestedContractComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the add(uint64,uint64)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  add(params?: CallParams<NestedContractArgs['obj']['add(uint64,uint64)uint64'] | NestedContractArgs['tuple']['add(uint64,uint64)uint64']>): NestedContractComposer<[...TReturns, NestedContractReturns['add(uint64,uint64)uint64'] | undefined]>

  /**
   * Calls the get_pay_txn_amount(pay)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getPayTxnAmount(params?: CallParams<NestedContractArgs['obj']['get_pay_txn_amount(pay)uint64'] | NestedContractArgs['tuple']['get_pay_txn_amount(pay)uint64']>): NestedContractComposer<[...TReturns, NestedContractReturns['get_pay_txn_amount(pay)uint64'] | undefined]>

  /**
   * Calls the nested_method_call(pay,appl)byte[] ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  nestedMethodCall(params?: CallParams<NestedContractArgs['obj']['nested_method_call(pay,appl)byte[]'] | NestedContractArgs['tuple']['nested_method_call(pay,appl)byte[]']>): NestedContractComposer<[...TReturns, NestedContractReturns['nested_method_call(pay,appl)byte[]'] | undefined]>

  /**
   * Makes a clear_state call to an existing instance of the NestedContract smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): NestedContractComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): NestedContractComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): AlgoKitComposer
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<NestedContractComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Sends the transaction group to the network and returns the results
   */
  send(params?: SendParams): Promise<NestedContractComposerResults<TReturns>>
}
export type NestedContractComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

