const ImageModal = ({title, img, idx}) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items = [
        { label: 'Description', key: 'item-1', children: tarotMeaning[idx] }, // remember to pass the key prop
        { label: 'Archetypal Journey', key: 'item-2', children: archetypalJourney[idx], disabled: !archetypalJourney[idx] }, // remember to pass the key prop
        // { label: 'Video', key: 'item-2', children: 'Content 2' },
        { label: 'Video', key: 'item-3',
            children: <iframe width="560" height="315" src={tarotVideos[idx]}
                              title="YouTube video player" frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen></iframe> },
    ];

    return (<>
        <antd.Tooltip title={shorts[idx]}>
            <img src={img} alt="" onClick={() => setIsModalOpen(true)} style={{cursor:'pointer'}}/>
        </antd.Tooltip>
        <antd.Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={img} alt="" style={{width:'200px'}}/>
                        </td>
                        <td style={{paddingLeft:'5px', fontWeight:'bold', verticalAlign:'top'}}>
                            <antd.Tabs items={items} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </antd.Modal>
        </>
    );
}