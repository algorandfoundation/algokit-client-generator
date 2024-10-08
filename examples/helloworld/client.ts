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
import { Address, modelsv2, OnApplicationComplete, Transaction, TransactionSigner } from 'algosdk'
import SimulateResponse = modelsv2.SimulateResponse

export const APP_SPEC: Arc56Contract = {"arcs":[],"name":"HelloWorldApp","structs":{},"methods":[{"name":"hello","desc":"Returns Hello, {name}","args":[{"name":"name","type":"string"}],"returns":{"type":"string"},"events":[],"actions":{"create":[],"call":["NoOp"]}},{"name":"hello_world_check","desc":"Asserts {name} is \"World\"","args":[{"name":"name","type":"string"}],"returns":{"type":"void"},"events":[],"actions":{"create":[],"call":["NoOp"]}}],"state":{"schema":{"global":{"ints":0,"bytes":0},"local":{"ints":0,"bytes":0}},"keys":{"global":{},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{}}},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4CnR4biBOdW1BcHBBcmdzCmludGNfMCAvLyAwCj09CmJueiBtYWluX2w2CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MDJiZWNlMTEgLy8gImhlbGxvKHN0cmluZylzdHJpbmciCj09CmJueiBtYWluX2w1CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4YmY5YzFlZGYgLy8gImhlbGxvX3dvcmxkX2NoZWNrKHN0cmluZyl2b2lkIgo9PQpibnogbWFpbl9sNAplcnIKbWFpbl9sNDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBoZWxsb3dvcmxkY2hlY2tjYXN0ZXJfNQppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sNToKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBoZWxsb2Nhc3Rlcl80CmludGNfMSAvLyAxCnJldHVybgptYWluX2w2Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2wxMgp0eG4gT25Db21wbGV0aW9uCnB1c2hpbnQgNCAvLyBVcGRhdGVBcHBsaWNhdGlvbgo9PQpibnogbWFpbl9sMTEKdHhuIE9uQ29tcGxldGlvbgpwdXNoaW50IDUgLy8gRGVsZXRlQXBwbGljYXRpb24KPT0KYm56IG1haW5fbDEwCmVycgptYWluX2wxMDoKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KYXNzZXJ0CmNhbGxzdWIgZGVsZXRlXzEKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDExOgp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQphc3NlcnQKY2FsbHN1YiB1cGRhdGVfMAppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTI6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CmFzc2VydAppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIHVwZGF0ZQp1cGRhdGVfMDoKcHJvdG8gMCAwCnR4biBTZW5kZXIKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09Ci8vIHVuYXV0aG9yaXplZAphc3NlcnQKcHVzaGludCBUTVBMX1VQREFUQUJMRSAvLyBUTVBMX1VQREFUQUJMRQovLyBDaGVjayBhcHAgaXMgdXBkYXRhYmxlCmFzc2VydApyZXRzdWIKCi8vIGRlbGV0ZQpkZWxldGVfMToKcHJvdG8gMCAwCnR4biBTZW5kZXIKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09Ci8vIHVuYXV0aG9yaXplZAphc3NlcnQKcHVzaGludCBUTVBMX0RFTEVUQUJMRSAvLyBUTVBMX0RFTEVUQUJMRQovLyBDaGVjayBhcHAgaXMgZGVsZXRhYmxlCmFzc2VydApyZXRzdWIKCi8vIGhlbGxvCmhlbGxvXzI6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCnB1c2hieXRlcyAweDQ4NjU2YzZjNmYyYzIwIC8vICJIZWxsbywgIgpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKY29uY2F0CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApsZW4KaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgMApjb25jYXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gaGVsbG9fd29ybGRfY2hlY2sKaGVsbG93b3JsZGNoZWNrXzM6CnByb3RvIDEgMApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKcHVzaGJ5dGVzIDB4NTc2ZjcyNmM2NCAvLyAiV29ybGQiCj09CmFzc2VydApyZXRzdWIKCi8vIGhlbGxvX2Nhc3RlcgpoZWxsb2Nhc3Rlcl80Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKY2FsbHN1YiBoZWxsb18yCmZyYW1lX2J1cnkgMApwdXNoYnl0ZXMgMHgxNTFmN2M3NSAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCmNvbmNhdApsb2cKcmV0c3ViCgovLyBoZWxsb193b3JsZF9jaGVja19jYXN0ZXIKaGVsbG93b3JsZGNoZWNrY2FzdGVyXzU6CnByb3RvIDAgMApieXRlY18wIC8vICIiCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmNhbGxzdWIgaGVsbG93b3JsZGNoZWNrXzMKcmV0c3Vi","clear":"I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"},"bareActions":{"create":["NoOp"],"call":["DeleteApplication","UpdateApplication"]}} as unknown as Arc56Contract

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


// Aliases for non-encoded ABI values


/**
 * The argument types for the HelloWorldApp contract
 */
export type HelloWorldAppArgs = {
  /**
   * The object representation of the arguments for each method
   */
  obj: {
    'hello(string)string': {
      name: string
    }
    'hello_world_check(string)void': {
      name: string
    }
  }
  /**
   * The tuple representation of the arguments for each method
   */
  tuple: {
    'hello(string)string': [name: string]
    'hello_world_check(string)void': [name: string]
  }
}

/**
 * The return type for each method
 */
export type HelloWorldAppReturns = {
  'hello(string)string': string
  'hello_world_check(string)void': void
}

/**
 * Defines the types of available calls and state of the HelloWorldApp smart contract.
 */
export type HelloWorldAppTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'hello(string)string' | 'hello', {
      argsObj: HelloWorldAppArgs['obj']['hello(string)string']
      argsTuple: HelloWorldAppArgs['tuple']['hello(string)string']
      returns: HelloWorldAppReturns['hello(string)string']
    }>
    & Record<'hello_world_check(string)void' | 'hello_world_check', {
      argsObj: HelloWorldAppArgs['obj']['hello_world_check(string)void']
      argsTuple: HelloWorldAppArgs['tuple']['hello_world_check(string)void']
      returns: HelloWorldAppReturns['hello_world_check(string)void']
    }>
}

/**
 * Defines the possible abi call signatures.
 */
export type HelloWorldAppSignatures = keyof HelloWorldAppTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type HelloWorldAppNonVoidMethodSignatures = keyof HelloWorldAppTypes['methods'] extends infer T ? T extends keyof HelloWorldAppTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
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
 * Maps a method signature from the HelloWorldApp smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends HelloWorldAppSignatures> = HelloWorldAppTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the HelloWorldApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends HelloWorldAppSignatures> = HelloWorldAppTypes['methods'][TSignature]['returns']


/**
 * Defines supported create method params for this smart contract
 */
export type HelloWorldAppCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: undefined} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines supported update method params for this smart contract
 */
export type HelloWorldAppUpdateCallParams =
  | Expand<AppClientBareCallParams> & {method?: undefined}
/**
 * Defines supported delete method params for this smart contract
 */
export type HelloWorldAppDeleteCallParams =
  | Expand<AppClientBareCallParams> & {method?: undefined}
/**
 * Defines arguments required for the deploy method.
 */
export type HelloWorldAppDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: HelloWorldAppCreateCallParams
  /**
   * Update transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  updateParams?: HelloWorldAppUpdateCallParams
  /**
   * Delete transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  deleteParams?: HelloWorldAppDeleteCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the HelloWorldApp smart contract
 */
export abstract class HelloWorldAppParamsFactory {
  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * Returns Hello, {name}
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static hello(params: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'hello(string)string' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.name],
    }
  }
  /**
   * Constructs a no op call for the hello_world_check(string)void ABI method
   *
   * Asserts {name} is "World"
   *
   * @param params Parameters for the call
   * @returns An `AppClientMethodCallParams` object for the call
   */
  static helloWorldCheck(params: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']> & CallOnComplete): AppClientMethodCallParams & CallOnComplete {
    return {
      ...params,
      method: 'hello_world_check(string)void' as const,
      args: Array.isArray(params.args) ? params.args : [params.args.name],
    }
  }
}

/**
 * A factory to create and deploy one or more instance of the HelloWorldApp smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class HelloWorldAppFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: AppFactory

  /**
   * Creates a new instance of `HelloWorldAppFactory`
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
    return new HelloWorldAppClient(this.appFactory.getAppClientById(params))
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
    return new HelloWorldAppClient(await this.appFactory.getAppClientByCreatorAndName(params))
  }

  /**
   * Idempotently deploys the HelloWorldApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: HelloWorldAppDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
    })
    return { result: result.result, appClient: new HelloWorldAppClient(result.appClient) }
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
       * Creates a new instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a create call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        return this.appFactory.params.bare.create(params)
      },
    },

    /**
     * Gets available deployUpdate methods
     */
    deployUpdate: {
      /**
       * Updates an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a deployUpdate call
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) => {
        return this.appFactory.params.bare.deployUpdate(params)
      },
    },

    /**
     * Gets available deployDelete methods
     */
    deployDelete: {
      /**
       * Deletes an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The params for a deployDelete call
       */
      bare: (params?: Expand<AppClientBareCallParams>) => {
        return this.appFactory.params.bare.deployDelete(params)
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
       * Creates a new instance of the HelloWorldApp smart contract using a bare call.
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
       * Creates a new instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The create result
       */
      bare: async (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}>) => {
        const result = await this.appFactory.send.bare.create(params)
        return { result: result.result, appClient: new HelloWorldAppClient(result.appClient) }
      },
    },

  }

}
/**
 * A client to make calls to the HelloWorldApp smart contract
 */
export class HelloWorldAppClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: AppClient

  /**
   * Creates a new instance of `HelloWorldAppClient`
   *
   * @param appClient An `AppClient` instance which has been created with the HelloWorldApp app spec
   */
  constructor(appClient: AppClient)
  /**
   * Creates a new instance of `HelloWorldAppClient`
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
  decodeReturnValue<TSignature extends HelloWorldAppNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), APP_SPEC.structs) : undefined
  }
  
  /**
   * Returns a new `HelloWorldAppClient` client, resolving the app by creator address and name
   * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
   * @param params The parameters to create the app client
   */
  public static async fromCreatorAndName(params: Omit<ResolveAppClientByCreatorAndName, 'appSpec'>): Promise<HelloWorldAppClient> {
    return new HelloWorldAppClient(await AppClient.fromCreatorAndName({...params, appSpec: APP_SPEC}))
  }
  
  /**
   * Returns an `HelloWorldAppClient` instance for the current network based on
   * pre-determined network-specific app IDs specified in the ARC-56 app spec.
   *
   * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
   * @param params The parameters to create the app client
   */
  static async fromNetwork(
    params: Omit<ResolveAppClientByNetwork, 'appSpec'>
  ): Promise<HelloWorldAppClient> {
    return new HelloWorldAppClient(await AppClient.fromNetwork({...params, appSpec: APP_SPEC}))
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
     * Gets available update methods
     */
    update: {
      /**
       * Updates an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The update result
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) => {
        return this.appClient.params.bare.update(params)
      },
    },

    /**
     * Gets available delete methods
     */
    delete: {
      /**
       * Deletes an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The delete result
       */
      bare: (params?: Expand<AppClientBareCallParams>) => {
        return this.appClient.params.bare.delete(params)
      },
    },

    /**
     * Makes a clear_state call to an existing instance of the HelloWorldApp smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.params.bare.clearState(params)
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello(string)string` ABI method.
     *
     * Returns Hello, {name}
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    hello: (params: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(HelloWorldAppParamsFactory.hello(params))
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello_world_check(string)void` ABI method.
     *
     * Asserts {name} is "World"
     *
     * @param params The params for the smart contract call
     * @returns The call params
     */
    helloWorldCheck: (params: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.params.call(HelloWorldAppParamsFactory.helloWorldCheck(params))
    },

  }

  /**
   * Create transactions for the current app
   */
  readonly createTransaction = {
    /**
     * Gets available update methods
     */
    update: {
      /**
       * Updates an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The update result
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) => {
        return this.appClient.createTransaction.bare.update(params)
      },
    },

    /**
     * Gets available delete methods
     */
    delete: {
      /**
       * Deletes an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The delete result
       */
      bare: (params?: Expand<AppClientBareCallParams>) => {
        return this.appClient.createTransaction.bare.delete(params)
      },
    },

    /**
     * Makes a clear_state call to an existing instance of the HelloWorldApp smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams>) => {
      return this.appClient.createTransaction.bare.clearState(params)
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello(string)string` ABI method.
     *
     * Returns Hello, {name}
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    hello: (params: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(HelloWorldAppParamsFactory.hello(params))
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello_world_check(string)void` ABI method.
     *
     * Asserts {name} is "World"
     *
     * @param params The params for the smart contract call
     * @returns The call transaction
     */
    helloWorldCheck: (params: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']> & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      return this.appClient.createTransaction.call(HelloWorldAppParamsFactory.helloWorldCheck(params))
    },

  }

  /**
   * Send calls to the current app
   */
  readonly send = {
    /**
     * Gets available update methods
     */
    update: {
      /**
       * Updates an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The update result
       */
      bare: (params?: Expand<AppClientBareCallParams & AppClientCompilationParams & SendParams>) => {
        return this.appClient.send.bare.update(params)
      },
    },

    /**
     * Gets available delete methods
     */
    delete: {
      /**
       * Deletes an existing instance of the HelloWorldApp smart contract using a bare call.
       *
       * @param params The params for the bare (raw) call
       * @returns The delete result
       */
      bare: (params?: Expand<AppClientBareCallParams & SendParams>) => {
        return this.appClient.send.bare.delete(params)
      },
    },

    /**
     * Makes a clear_state call to an existing instance of the HelloWorldApp smart contract.
     *
     * @param params The params for the bare (raw) call
     * @returns The clearState result
     */
    clearState: (params?: Expand<AppClientBareCallParams & SendParams>) => {
      return this.appClient.send.bare.clearState(params)
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello(string)string` ABI method.
     *
     * Returns Hello, {name}
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    hello: async (params: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(HelloWorldAppParamsFactory.hello(params))
      return {...result, return: result.return as undefined | HelloWorldAppReturns['hello(string)string']}
    },

    /**
     * Makes a call to the HelloWorldApp smart contract using the `hello_world_check(string)void` ABI method.
     *
     * Asserts {name} is "World"
     *
     * @param params The params for the smart contract call
     * @returns The call result
     */
    helloWorldCheck: async (params: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']> & SendParams & {onComplete?: OnApplicationComplete.NoOpOC}) => {
      const result = await this.appClient.send.call(HelloWorldAppParamsFactory.helloWorldCheck(params))
      return {...result, return: result.return as undefined | HelloWorldAppReturns['hello_world_check(string)void']}
    },

  }

  /**
   * Methods to access state for the current HelloWorldApp app
   */
  state = {
  }

  public newGroup(): HelloWorldAppComposer {
    const client = this
    const composer = this.algorand.newGroup()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      /**
       * Add a hello(string)string method call against the HelloWorldApp contract
       */
      hello(params: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.hello(params)))
        resultMappers.push((v) => client.decodeReturnValue('hello(string)string', v))
        return this
      },
      /**
       * Add a hello_world_check(string)void method call against the HelloWorldApp contract
       */
      helloWorldCheck(params: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']> & {onComplete?: OnApplicationComplete.NoOpOC}) {
        promiseChain = promiseChain.then(async () => composer.addAppCallMethodCall(await client.params.helloWorldCheck(params)))
        resultMappers.push(undefined)
        return this
      },
      get update() {
        return {
          bare: (params?: AppClientBareCallParams & AppClientCompilationParams ) => {
            promiseChain = promiseChain.then(async () => composer.addAppUpdate(await client.params.update.bare(params)))
            return this
          },
        }
      },
      get delete() {
        return {
          bare: (params?: AppClientBareCallParams ) => {
            promiseChain = promiseChain.then(() => composer.addAppDelete(client.params.delete.bare(params)))
            return this
          },
        }
      },
      /**
       * Add a clear state call to the HelloWorldApp contract
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
    } as unknown as HelloWorldAppComposer
  }
}
export type HelloWorldAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the hello(string)string ABI method.
   *
   * Returns Hello, {name}
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(params?: CallParams<HelloWorldAppArgs['obj']['hello(string)string'] | HelloWorldAppArgs['tuple']['hello(string)string']>): HelloWorldAppComposer<[...TReturns, HelloWorldAppReturns['hello(string)string'] | undefined]>

  /**
   * Calls the hello_world_check(string)void ABI method.
   *
   * Asserts {name} is "World"
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  helloWorldCheck(params?: CallParams<HelloWorldAppArgs['obj']['hello_world_check(string)void'] | HelloWorldAppArgs['tuple']['hello_world_check(string)void']>): HelloWorldAppComposer<[...TReturns, HelloWorldAppReturns['hello_world_check(string)void'] | undefined]>

  /**
   * Gets available delete methods
   */
  readonly delete: {
    /**
     * Deletes an existing instance of the HelloWorldApp smart contract using a bare call.
     *
     * @param args The arguments for the bare call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    bare(params?: AppClientBareCallParams ): HelloWorldAppComposer<[...TReturns, undefined]>
  }

  /**
   * Makes a clear_state call to an existing instance of the HelloWorldApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): HelloWorldAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): HelloWorldAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): AlgoKitComposer
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<HelloWorldAppComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Sends the transaction group to the network and returns the results
   */
  send(params?: SendParams): Promise<HelloWorldAppComposerResults<TReturns>>
}
export type HelloWorldAppComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

