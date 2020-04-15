import React, { useState } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const JoinRoom = () => {
    const [user, setUser] = useState({
        username: 'Anonymous',
        room: 'javascript'
    });

    return (
        <Layout>
            <form className='joinroom-form'>
                <div className='form-control'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Enter room username...'
                        onChange={e =>
                            setUser({ ...user, username: e.target.value })
                        }
                        required
                    />
                </div>

                <Link to='/' state={{ user }} id='joinRoom'>
                    Join Room
                </Link>
            </form>
        </Layout>
    );
};

export default JoinRoom;
