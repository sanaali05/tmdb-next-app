import React from 'react'

const loading = () => {
    return (
        <>
            <div className="section loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"#032541" }}>
                <div class="spinner-border "style={{width: "7rem", height: "7rem",color:"#72C8B0"}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default loading
