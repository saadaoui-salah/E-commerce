/* import { useState, createContext } from "react";
import {ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, Observable} from '@apollo/client'
import {onError} from '@apollo/client/link-error'

let authToken = ''
const initial = {
    appState: {logedIn: false},
    gqlError: {msg: ''},
    appSetLogin: (token) => {},
    appSetLogout: () => {},
    appSetAuthToken: (token) => {},
    appClearAuthToken: () => {}
}

export const AppStateContext = createContext(initial)

function AppStateProvider({children}){
    const [appState, setAppState] = useState({logedIn: false})
    const [gqlError, setGqlError] = useState({msg: ''})
    const appSetLogin = (token) => {
        authToken = token
        setAppState(...appState, {logedIn: true})
    } 
    const appSetLogout = () => {
        authToken = 
        setAppState(...appState, {logedIn: false})
    }

    const appSetAuthToken = (token) => {authToken = token;}
    const appClearAuthToken = () => {authToken = '';}
    const appGetAuthToken = () => {return authToken}
}

const cach = InMemoryCache({})
const requestLink = new ApolloClient((operation, forward) => {
    new Observable(observer=>{
        let handle
        Promise.resolve(operation)
        .then((operation) => {
            operation.setContext({headers: {authorization: `Bearer ${appGetAuthToken()}`}})
        })
        .then(() => {
            handle = forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
            })
        })
        .catch(observer.error.bind(observer))
        return () => {
            if (handle) handle.unsubscribe()
        }
    })

})


const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({graphql}))
    ])
}) */