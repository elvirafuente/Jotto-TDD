import React from 'react';

/**
 * Functional component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */

const Congrats = (props) => {
    const { success } = props
    return (
        <>
        {
            success 
            ?
                <div data-test='component-congrats'>
                    <span data-test='congrats-message'>
                        Congratulations! You guessed the word!
                    </span>
                </div>
            :
                <div data-test='component-congrats'/>
        }
        </>
    )

}

export default Congrats