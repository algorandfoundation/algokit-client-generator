/* eslint-disable */
// @ts-nocheck
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^3
 */
import { ABIReturn, AppReturn, SendAppTransactionResult } from '@algorandfoundation/algokit-utils/types/app'
import { Arc56Contract, getABIStructFromABITuple, getABITupleFromABIStruct, getArc56ReturnValue } from '@algorandfoundation/algokit-utils/types/app-arc56'
import {
  AppClient,
  AppClientMethodCallParams,
  AppClientParams,
  AppClientBareCallParams,
  CallOnComplete,
  AppClientCompilationParams,
  ResolveAppClientByCreatorAndName,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppFactory, AppFactoryDeployParams, AppFactoryParams, CreateSchema } from '@algorandfoundation/algokit-utils/types/app-factory'
import AlgoKitComposer, { AppCallMethodCall, AppMethodCallTransactionArgument, SimulateOptions } from '@algorandfoundation/algokit-utils/types/composer'
import { ExecuteParams, SendSingleTransactionResult, SendAtomicTransactionComposerResults } from '@algorandfoundation/algokit-utils/types/transaction'
import { ABIValue, modelsv2, OnApplicationComplete, Transaction, TransactionSigner } from 'algosdk'
import SimulateResponse = modelsv2.SimulateResponse

export const APP_SPEC: Arc56Contract = {"arcs":[],"name":"MinimalApp","desc":"An app that has no abi methods","structs":{},"methods":[],"state":{"schema":{"global":{"ints":0,"bytes":0},"local":{"ints":0,"bytes":0}},"keys":{"global":{},"local":{},"box":{}},"maps":{"global":{},"local":{},"box":{}}},"source":{"approval":"I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQp0eG4gTnVtQXBwQXJncwppbnRjXzAgLy8gMAo9PQpibnogbWFpbl9sMgplcnIKbWFpbl9sMjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sOAp0eG4gT25Db21wbGV0aW9uCnB1c2hpbnQgNCAvLyBVcGRhdGVBcHBsaWNhdGlvbgo9PQpibnogbWFpbl9sNwp0eG4gT25Db21wbGV0aW9uCnB1c2hpbnQgNSAvLyBEZWxldGVBcHBsaWNhdGlvbgo9PQpibnogbWFpbl9sNgplcnIKbWFpbl9sNjoKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KYXNzZXJ0CmNhbGxzdWIgZGVsZXRlXzEKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDc6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CmFzc2VydApjYWxsc3ViIHVwZGF0ZV8wCmludGNfMSAvLyAxCnJldHVybgptYWluX2w4Ogp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKaW50Y18xIC8vIDEKcmV0dXJuCgovLyB1cGRhdGUKdXBkYXRlXzA6CnByb3RvIDAgMAp0eG4gU2VuZGVyCmdsb2JhbCBDcmVhdG9yQWRkcmVzcwo9PQovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CnB1c2hpbnQgVE1QTF9VUERBVEFCTEUgLy8gVE1QTF9VUERBVEFCTEUKLy8gQ2hlY2sgYXBwIGlzIHVwZGF0YWJsZQphc3NlcnQKcmV0c3ViCgovLyBkZWxldGUKZGVsZXRlXzE6CnByb3RvIDAgMAp0eG4gU2VuZGVyCmdsb2JhbCBDcmVhdG9yQWRkcmVzcwo9PQovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CnB1c2hpbnQgVE1QTF9ERUxFVEFCTEUgLy8gVE1QTF9ERUxFVEFCTEUKLy8gQ2hlY2sgYXBwIGlzIGRlbGV0YWJsZQphc3NlcnQKcmV0c3Vi","clear":"I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"},"bareActions":{"create":["NoOp"],"call":["DeleteApplication","UpdateApplication"]}}

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
 * Defines the types of available calls and state of the MinimalApp smart contract.
 */
export type MinimalAppTypes = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods: {}
}

/**
 * Defines the possible abi call signatures.
 */
export type MinimalAppSignatures = keyof MinimalAppTypes['methods']
/**
 * Defines the possible abi call signatures for methods that return a non-void value.
 */
export type MinimalAppNonVoidMethodSignatures = keyof MinimalAppTypes['methods'] extends infer T ? T extends keyof MinimalAppTypes['methods'] ? MethodReturn<T> extends void ? never : T  : never : never
/**
 * Defines an object containing all relevant parameters for a single call to the contract.
 */
export type CallParams<TSignature extends MinimalAppSignatures> = Expand<
  Omit<AppClientMethodCallParams, 'method' | 'args' | 'onComplete'> &
    {
      /** The args for the ABI method call, either as an ordered array or an object */
      args: Expand<MethodArgs<TSignature>>
    }
>
/**
 * Maps a method signature from the MinimalApp smart contract to the method's arguments in either tuple or struct form
 */
export type MethodArgs<TSignature extends MinimalAppSignatures> = MinimalAppTypes['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the MinimalApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends MinimalAppSignatures> = MinimalAppTypes['methods'][TSignature]['returns']


/**
 * Defines supported create method params for this smart contract
 */
export type MinimalAppCreateCallParams =
  | Expand<AppClientBareCallParams & {method?: undefined} & {onComplete?: OnApplicationComplete.NoOpOC} & CreateSchema>
/**
 * Defines supported update method params for this smart contract
 */
export type MinimalAppUpdateCallParams =
  | Expand<AppClientBareCallParams> & {method?: undefined}
/**
 * Defines supported delete method params for this smart contract
 */
export type MinimalAppDeleteCallParams =
  | Expand<AppClientBareCallParams> & {method?: undefined}
/**
 * Defines arguments required for the deploy method.
 */
export type MinimalAppDeployParams = Expand<Omit<AppFactoryDeployParams, 'createParams' | 'updateParams' | 'deleteParams'> & {
  /**
   * Create transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  createParams?: MinimalAppCreateCallParams
  /**
   * Update transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  updateParams?: MinimalAppUpdateCallParams
  /**
   * Delete transaction parameters to use if a create needs to be issued as part of deployment; use `method` to define ABI call (if available) or leave out for a bare call (if available)
   */
  deleteParams?: MinimalAppDeleteCallParams
}>


/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the MinimalApp smart contract
 */
export abstract class MinimalAppParamsFactory {
}

/**
 * A factory to create and deploy one or more instance of  the MinimalApp smart contract and to create one or more app clients to interact with those (or other) app instances
 */
export class MinimalAppFactory {
  /**
   * The underlying `AppFactory` for when you want to have more flexibility
   */
  public readonly appFactory: AppFactory

  /**
   * Creates a new instance of `MinimalAppFactory`
   *
   * @param params The parameters to initialise the app factory with
   */
  constructor(params: Expand<Omit<AppFactoryParams, 'appSpec'>>) {
    this.appFactory = new AppFactory({
      ...params,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Returns a new `AppClient` client for an app instance of the given ID.
   *
   * Automatically populates appName, defaultSender and source maps from the factory
   * if not specified in the params.
   * @param params The parameters to create the app client
   * @returns The `AppClient`
   */
  public getAppClientById(params: Expand<Omit<AppClientParams, 'algorand' | 'appSpec'>>) {
    return new MinimalAppClient(this.appFactory.getAppClientById(params))
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
  public async getAppClientByCreatorAddressAndName(
    params: Expand<Omit<AppClientParams, 'algorand' | 'appSpec' | 'appId'> & ResolveAppClientByCreatorAndName>,
  ) {
    return new MinimalAppClient(await this.appFactory.getAppClientByCreatorAddressAndName(params))
  }

  /**
   * Idempotently deploys the MinimalApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public async deploy(params: MinimalAppDeployParams = {}) {
    const result = await this.appFactory.deploy({
      ...params,
    })
    return { result: result.result, app: new MinimalAppClient(result.app) }
  }

  /**
   * Get parameters to define transactions to the current app
   */
  readonly params = (($this) => {
    return {
      /**
       * Gets available create methods
       */
      get create() {
        return {
          /**
           * Creates a new instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a create call
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            return $this.appFactory.params.bare.create(params)
          },
        }
      },

      /**
       * Gets available deployUpdate methods
       */
      get deployUpdate() {
        return {
          /**
           * Updates an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a deployUpdate call
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appFactory.params.bare.deployUpdate(params)
          },
        }
      },

      /**
       * Gets available deployDelete methods
       */
      get deployDelete() {
        return {
          /**
           * Deletes an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The params for a deployDelete call
           */
          bare(params?: Expand<AppClientBareCallParams>) {
            return $this.appFactory.params.bare.deployDelete(params)
          },
        }
      },

    }
  })(this)

  /**
   * Send calls to the current app
   */
  readonly send = (($this) => {
    return {
      /**
       * Gets available create methods
       */
      get create() {
        return {
          /**
           * Creates a new instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The create result
           */
          async bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & CreateSchema & ExecuteParams & {onComplete?: OnApplicationComplete.NoOpOC}>) {
            const result = await $this.appFactory.create(params)
            return { result: result.result, app: new MinimalAppClient(result.app) }
          },
        }
      },

    }
  })(this)

}
/**
 * A client to make calls to the MinimalApp smart contract
 */
export class MinimalAppClient {
  /**
   * The underlying `AppClient` for when you want to have more flexibility
   */
  public readonly appClient: AppClient

  /**
   * Creates a new instance of `MinimalAppClient`
   *
   * @param appClient An `AppClient` instance which has been created with the MinimalApp app spec
   */
  constructor(appClient: AppClient)
  /**
   * Creates a new instance of `MinimalAppClient`
   *
   * @param params The parameters to initialise the app client with
   */
  constructor(params: Expand<Omit<AppClientParams, 'appSpec'>>)
  constructor(appClientOrParams: AppClient | Expand<Omit<AppClientParams, 'appSpec'>>) {
    this.appClient = appClientOrParams instanceof AppClient ? appClientOrParams : new AppClient({
      ...appClientOrParams,
      appSpec: APP_SPEC,
    })
  }
  
  /**
   * Checks for decode errors on the given return value and maps the return value to the return type for the given method
   * @returns The typed return value or undefined if there was no value
   */
  decodeReturnValue<TSignature extends MinimalAppNonVoidMethodSignatures>(method: TSignature, returnValue: ABIReturn | undefined) {
    return returnValue !== undefined ? getArc56ReturnValue<MethodReturn<TSignature>>(returnValue, this.appClient.getABIMethod(method), {}) : undefined
  }

  /**
   * Get parameters to define transactions to the current app
   */
  readonly params = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appClient.params.bare.update(params)
          },
        }
      },

      /**
       * Gets available delete methods
       */
      get delete() {
        return {
          /**
           * Deletes an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The delete result
           */
          bare(params?: Expand<AppClientBareCallParams>) {
            return $this.appClient.params.bare.delete(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the MinimalApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.params.bare.clearState(params)
      },

    }
  })(this)

  /**
   * Get parameters to define transactions to the current app
   */
  readonly transactions = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams>) {
            return $this.appClient.transactions.bare.update(params)
          },
        }
      },

      /**
       * Gets available delete methods
       */
      get delete() {
        return {
          /**
           * Deletes an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The delete result
           */
          bare(params?: Expand<AppClientBareCallParams>) {
            return $this.appClient.transactions.bare.delete(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the MinimalApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams>) {
        return $this.appClient.transactions.bare.clearState(params)
      },

    }
  })(this)

  /**
   * Send calls to the current app
   */
  readonly send = (($this) => {
    return {
      /**
       * Gets available update methods
       */
      get update() {
        return {
          /**
           * Updates an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The update result
           */
          bare(params?: Expand<AppClientBareCallParams & AppClientCompilationParams & ExecuteParams>) {
            return $this.appClient.send.bare.update(params)
          },
        }
      },

      /**
       * Gets available delete methods
       */
      get delete() {
        return {
          /**
           * Deletes an existing instance of the MinimalApp smart contract using a bare call.
           *
           * @param params The params for the bare (non-ABI) call
           * @returns The delete result
           */
          bare(params?: Expand<AppClientBareCallParams & ExecuteParams>) {
            return $this.appClient.send.bare.delete(params)
          },
        }
      },

      /**
       * Makes a clear_state call to an existing instance of the MinimalApp smart contract.
       *
       * @param params The params for the bare (non-ABI) call
       * @returns The clearState result
       */
      clearState(params?: Expand<AppClientBareCallParams & ExecuteParams>) {
        return $this.appClient.send.bare.clearState(params)
      },

    }
  })(this)

  /**
   * Methods to access state for the current MinimalApp app
   */
  state = {
  }

  public newGroup(): MinimalAppComposer {
    const client = this
    const composer = client.appClient.newGroup()
    const resultMappers: Array<undefined | ((x: ABIReturn | undefined) => any)> = []
    return {
      get delete() {
        const $this = this
        return {
          bare(params?: AppClientBareCallParams ) {
            composer.addAppDelete(client.params.delete.bare(params))
            resultMappers.push(undefined)
            return $this
          },
        }
      },
      /**
       * Add a clear state call to the MinimalApp contract
       */
      clearState(params: AppClientBareCallParams) {
        composer.addAppCall(client.params.clearState(params))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: Transaction, signer?: TransactionSigner) {
        composer.addTransaction(txn, signer)
        resultMappers.push(undefined)
        return this
      },
      composer() {
        return composer
      },
      async simulate(options?: SimulateOptions) {
        const result = await composer.simulate(options)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      },
      async execute(params?: ExecuteParams) {
        const result = await composer.execute(params)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val) : val.returnValue)
        }
      }
    } as unknown as MinimalAppComposer
  }
}
export type MinimalAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Gets available delete methods
   */
  readonly delete: {
    /**
     * Deletes an existing instance of the MinimalApp smart contract using a bare call.
     *
     * @param args The arguments for the bare call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    bare(params?: AppClientBareCallParams ): MinimalAppComposer<[...TReturns, undefined]>
  }

  /**
   * Makes a clear_state call to an existing instance of the MinimalApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(params?: AppClientBareCallParams): MinimalAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn A transaction to add to the transaction group
   * @param signer The optional signer to use when signing this transaction.
   */
  addTransaction(txn: Transaction, signer?: TransactionSigner): MinimalAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  composer(): AlgoKitComposer
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<MinimalAppComposerResults<TReturns> & { simulateResponse: SimulateResponse }>
  /**
   * Executes the transaction group and returns the results
   */
  execute(params?: ExecuteParams): Promise<MinimalAppComposerResults<TReturns>>
}
export type MinimalAppComposerResults<TReturns extends [...any[]]> = Expand<SendAtomicTransactionComposerResults & {
  returns: TReturns
}>

