import React, { useState } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const JoinRoom = () => {
    const [user, setUser] = useState({
        username: '',
        room: ''
    });

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <Layout>
            <form className='joinroom-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Enter room username...'
                        onChange={e =>
                            setUser({ ...user, username: e.target.value })
                        }
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='rooms'>Available rooms to join</label>
                    <select
                        name='rooms'
                        id='rooms'
                        onBlur={e => setUser({ ...user, room: e.target.value })}
                    >
                        <option value='javascript'>JavaScript</option>
                        <option value='python'>Python</option>
                        <option value='c#'>C#</option>
                        <option value='java'>Java</option>
                        <option value='php'>PHP</option>
                        <option value='ruby'>Ruby</option>
                        <option value='c'>C</option>
                    </select>
                </div>

                <Link to='/' state={{ user }}>
                    Join Room
                </Link>
            </form>
        </Layout>
    );
};

export default JoinRoom;
