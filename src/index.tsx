import { Button } from 'antd-mobile'
import React from 'react'

const Component: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="layout-warp">
      12313
      <Button color="primary" fill="solid">
        Solid
      </Button>
      <Button color="primary" fill="outline">
        Outline
      </Button>
      <Button color="primary" fill="none">
        None
      </Button>
    </div>
  )
}

export default Component
