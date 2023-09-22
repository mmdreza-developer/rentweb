import React, { memo } from 'react'

export default memo(
    function ErrorMessage({ name }) {
        return (
            <ErrorMessage className='text-orange-600' name={name} component="div" />
        )
    }

)