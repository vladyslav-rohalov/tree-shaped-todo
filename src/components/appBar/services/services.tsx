const Services = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.8em',
      }}
    >
      <p style={{ fontSize: '2em' }}>Services</p>
      <span
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          right: '-28px',
          top: '16px',
          width: 20,
          height: 20,
          borderRadius: 8,
          backgroundColor: '#F7BD32',
          color: '#fff',
        }}
      >
        <p style={{ fontSize: '0.75em' }}>0</p>
      </span>
    </div>
  );
};

export default Services;
