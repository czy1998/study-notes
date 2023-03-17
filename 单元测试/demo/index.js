import React from 'react'
import { render, cleanup, fireEvent, act, screen } from '@testing-library/react'

describe('demo', () => {
    it('first', () => {
        const element = <div>Hello World!</div>
        render(element)
        /* 匹配字符串 */
        console.log(1, screen.getByText('Hello World!').textContent)
        console.log(2, screen.getByText('ello World', { exact: false }).textContent)
        console.log(3, screen.getByText('hello world!', { exact: false }).textContent)
        /* 匹配正则 */
        console.log(4, screen.getByText(/ World\!/).textContent)
        console.log(5, screen.getByText(/hello world\!/i).textContent)
        console.log(6, screen.getByText(/^hello world!$/i).textContent)
        console.log(7, screen.getByText(/Hello W?oRlD/i).textContent)
        /* 回调方法 */
        screen.getByText((content, element) => {
            console.log(element?.tagName)
            return content.startsWith('Hello')
        })
    })
})
