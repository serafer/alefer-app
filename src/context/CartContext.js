import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    /*     const addItem = (productToAdd) => {
            if(!isInCart(productToAdd.id)) {
                setCart(prev => [...prev, productToAdd])
            } else {
                console.log('No se agrega porque ya esta en el carrito')
            }
        } */

    const addItem = (productToAdd) => {
        if (isInCart(productToAdd.id)) {
            setCart((prev) =>
                prev.map((product) =>
                    product.id === productToAdd.id
                        ? { ...product, quantity: product.quantity + productToAdd.quantity }
                        : product
                )
            );
        } else {
            setCart((prev) => [...prev, productToAdd]);
        }
    };


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotalAmount = () => {
        let totalAmount = 0

        cart.forEach(prod => {
            totalAmount += prod.quantity * prod.price
        })

        return totalAmount
    }

    const totalAmount = getTotalAmount()

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}