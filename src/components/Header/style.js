import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    font-size: 14px;
    color: #999;
    background-color: white;

    .header-top {
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
        text-align: right;
        a {
            margin-left: 40px;
        }
    }

    .breadcrumb {
        border-top: 1px solid #002140;
        padding: 0 20px;
        height: 44px;
        line-height: 44px;

        .bradcrumb-title {
            height: 100%;
            text-align: center;
            font-size: 18px;
            color: #666;

            &:after {
                position: absolute;
                top: 43px;
                left: 135px;
                content: '';            //清空盒子内部，想像四个
                border-top: 10px solid white;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
            }
        }
        
    }
`;

export const TodayInfo = styled.div`
    float: right;
    .time {
        margin-right: 20px;
    }
`;