import { useMemo } from 'react'

type Falsy = null | undefined | false | 0 | '' // Define Falsy type

type Condition<Value = unknown> = Value | Falsy

interface IfProps<Value = unknown> {
  condition: Condition<Value>
  children: React.ReactNode | ((value: Value) => React.ReactNode)
  fallback?: React.ReactNode
}

function If<Value = unknown>({ condition, children, fallback }: IfProps<Value>) {
  return useMemo(() => {
    if (condition) {
      if (typeof children === 'function') {
        return <>{(children as (value: Value) => React.ReactNode)(condition)}</>
      }

      return <>{children}</>
    }

    if (fallback) {
      return <>{fallback}</>
    }

    return null
  }, [condition, fallback, children])
}

export default If
