const TableTarot = () => {

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

    return (
        <>
            <antd.Button onClick={showModal}>Show Tarot Table</antd.Button>

            <antd.Modal title="Tarot Table" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <table cellPadding={10} cellSpacing={0} border={1}>
                    <tbody>
                    <tr>
                        <td><img src="https://w7.pngwing.com/pngs/560/521/png-transparent-alchemical-symbol-fire-classical-element-alchemy-alchemy-angle-rectangle-triangle-thumbnail.png" alt="" style={{width:'50px'}}/></td>
                        <td>Wands</td>
                        <td>Fire</td>
                        <td>Spiritual</td>
                        <td>Take action</td>
                    </tr>
                    <tr>
                        <td><img src="https://w7.pngwing.com/pngs/410/451/png-transparent-alchemical-symbol-water-classical-element-earth-inverted-triangle-chemical-element-angle-text-thumbnail.png" alt="" style={{width:'50px'}}/></td>
                        <td>Cups</td>
                        <td>Water</td>
                        <td>Emotional</td>
                        <td>Listen to gut</td>
                    </tr>
                    <tr>
                        <td><img src="https://w7.pngwing.com/pngs/1020/497/png-transparent-air-alchemical-symbol-water-classical-element-triangle-angle-triangle-libra-thumbnail.png" alt="" style={{width:'50px'}}/></td>
                        <td>Swords</td>
                        <td>Air</td>
                        <td>Intellectual</td>
                        <td>Make a plan</td>
                    </tr>
                    <tr>
                        <td><img src="https://w7.pngwing.com/pngs/304/626/png-transparent-earth-symbol-alchemical-symbol-classical-element-air-agua-angle-text-rectangle-thumbnail.png" alt="" style={{width:'50px'}}/></td>
                        <td>Pentacles</td>
                        <td>Earth</td>
                        <td>Physical</td>
                        <td>Use common sense</td>
                    </tr>
                    </tbody>
                </table>
            </antd.Modal>
        </>
    );
}