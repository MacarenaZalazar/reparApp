import React from 'react'
import CardUserFinal from '../../components/PerfilUserFinal/CardUserFinal';
import UpDateUserFinal from '../../components/PerfilUserFinal/UpDateUserFinal';
function ProfileUserFinal() {
    return (
        <div className='container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>
                        <CardUserFinal/>
                    </div>
                    <div className='col-sm'>
                        <UpDateUserFinal/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserFinal
