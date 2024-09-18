import { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');


    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setUsername(inputValue);


        // Chequeo si contiene la letra 'o' o 'O'
        if (inputValue.includes('o') || inputValue.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };


    const handleRegister = () => {
        // Chequeo si el nombre de usuario está vacío o contiene 'o'/'O'
        if (username === '' || username.includes('o') || username.includes('O')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };


    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre de usuario"
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>Nombre ingresado: {username}</p>
        </div>
    );
};


export default Login;



