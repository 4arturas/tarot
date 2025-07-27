const TarotCardPositions = () => {

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
            <antd.Button onClick={showModal}>Click</antd.Button>

            <antd.Modal title="title" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800}>
                <table>
                    <tbody>
                    <tr>
                        <td>About This Free Tarot Reading<br/>
                            Based on the classic Celtic Cross spread, this Free Tarot Reading is designed to help you move through whatever issues you're facing with greater clarity and confidence. From personal matters to questions about love, career, finances, or a major decision you need to make, this versatile spread has advice for any area of your life.

                            When you need more guidance than just one card can provide, a 3-card Tarot spread is just right. In this free reading you'll get a card that represents your feelings and mindset in this moment, another that represents your current situation, and one that represents the challenges you may experience. With this new knowledge, you'll have a greater understanding of your circumstances and influences, as well as a better idea of the tools and solutions currently available to you.

                            Don't spend another day stressing about your situation! Use the personalized insight in this free online Tarot reading to get the answers you need NOW!</td>
                        <td style={{paddingLeft:'5px', fontWeight:'bold', verticalAlign:'top'}}>
                            Tarot Card Positions<br/>
                            Self: How you perceive yourself right now<br/>
                            Situation: Social or circumstantial factors that could be affecting your life now<br/>
                            Challenges/​Opportunities: How to turn your obstacles into opportunities<br/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </antd.Modal>
        </>
    );
}