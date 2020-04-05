import React from 'react';
import Layout from '../components/layout';

const JoinRoom = () => {
    return (
        <Layout>
            <form className='joinroom-form'>
                <div className='form-control'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' />
                </div>

                <select name='rooms' id='rooms'>
                    <option value='javascript'>JavaScript</option>
                    <option value='python'>Python</option>
                    <option value='c#'>C#</option>
                    <option value='java'>Java</option>
                    <option value='php'>PHP</option>
                    <option value='ruby'>Ruby</option>
                    <option value='c'>C</option>
                </select>
            </form>
        </Layout>
    );
};

export default JoinRoom;
