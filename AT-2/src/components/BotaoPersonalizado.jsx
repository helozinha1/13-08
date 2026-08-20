function BotaoPersonalizado(props) {
    return (
    <button style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}>
      {props.text}
    </button>
    )

}

export default BotaoPersonalizado