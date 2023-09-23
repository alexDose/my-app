import React, { useState } from 'react';
import './index.css';

const DataFilter = ({ data }) => {
    const [inputValue, setInputValue] = useState('');

    const filteredData = data.filter(item => {
        const itemId = String(item.id);
        return itemId.startsWith(inputValue);
    });

    const uniqueIds = new Set();

    return (
        <div className={'container'}>
            <input
                type="text"
                placeholder="...Enter your number of card"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
                {inputValue.length > 1 && filteredData.map(item => {
                    const itemId = String(item.id);

                    if (uniqueIds.has(itemId)) {
                        return null;
                    }

                    uniqueIds.add(itemId);

                    return (
                        <div className={'box'} key={item.id}>
                            <div className={'item'}>card: <span>{item.id}</span></div>
                            <div className={'item'}>tel: <span>{item.tel}</span></div>
                            {item.name && <div className={'item'}>name: <span>{item.name}</span></div>}
                            {item.card && <div className={'item'}>bank: <span>{item.card}</span></div>}
                        </div>
                    );
                })}
        </div>
    );
}

const data = [
    {id: 5980, name: 'Crambler', tel: 'redmi rabochiy', card: 'lili black'},
    {id: 6285, name: 'Crambler', tel: 'redmi rabochiy', card: ''},
    {id: 7681, name: 'Crambler', tel: 'redmi rabochiy', card: ''},
    {id: 4336, name: 'Crambler', tel: 'redmi rabochiy', card: 'seis'},
    {id: 9246, name: 'Crambler', tel: 'redmi rabochiy', card: ''},
    {id: 1424, name: 'Crambler', tel: 'redmi rabochiy', card: 'sp'},
    {id: 6083, name: 'Crambler', tel: 'redmi rabochiy', card: 'sp'},
    {id: 4818, name: 'Crambler', tel: 'redmi rabochiy', card: 'sp'},
    {id: 1172, name: 'Adolf', tel: '11 samsung', card: 'lili black'},
    {id: 8886, name: 'Adolf', tel: '11 samsung', card: ''},
    {id: 7681, name: 'Adolf', tel: '11 samsung', card: ''},
    {id: '0354', name: 'Adolf', tel: '11 samsung', card: ''},
    {id: 3788, name: 'Adolf', tel: '11 samsung', card: 'seis'},
    {id: 6262, name: 'Adolf', tel: '11 samsung', card: 'novo'},
    {id: 2600, name: 'Adolf', tel: '11 samsung', card: 'nine'},
    {id: 1220, name: 'Adolf', tel: '11 samsung', card: 'seis'},
    {id: 3011, name: 'Adolf', tel: '11 samsung', card: 'nine'},
    {id: 8839, name: 'Adolf', tel: '11 samsung', card: ''},
    {id: 5052, name: 'Adolf', tel: '11 samsung', card: 'seis'},
    {id: '0532', name: 'Adolf', tel: '11 samsung', card: ''},
    {id: 9107, name: 'Gruzin', tel: '11 samsung', card: 'lili black'},
    {id: 6022, name: 'Gruzin', tel: '11 samsung', card: 'spruce'},
    {id: 9773, name: 'Gruzin', tel: '11 samsung', card: 'north one'},
    {id: 9855, name: 'Gruzin', tel: '11 samsung', card: 'seis'},
    {id: 9536, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 1796, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: '0684', name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 7592, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 7103, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 4121, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 8035, name: 'Gruzin', tel: '11 samsung', card: 'lili pro'},
    {id: 7507, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 1958, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 9272, name: 'Gruzin', tel: '11 samsung', card: 'seis'},
    {id: 1136, name: 'Gruzin', tel: '11 samsung', card: ''},
    {id: 9065, name: 'Fasfood', tel: '11 samsung', card: 'seis'},
    {id: 6544, name: 'Fasfood', tel: '11 samsung', card: ''},
    {id: 8121, name: 'Fasfood', tel: '11 samsung', card: 'lili black'},
    {id: 4862, name: 'Fasfood', tel: '11 samsung', card: 'seis'},
    {id: 9334, name: 'Fasfood', tel: '11 samsung', card: 'revolut'},
    {id: 9482, name: 'Fasfood', tel: '11 samsung', card: 'lili black'},
    {id: 7431, name: 'Fasfood', tel: '11 samsung', card: ''},
    {id: 1279, name: 'Fasfood', tel: '11 samsung', card: 'seis'},
    {id: '0381', name: 'Fasfood', tel: '11 samsung', card: ''},
    {id: 5437, name: 'Fasfood', tel: '11 samsung', card: ''},
    {id: 7948, name: 'Fasfood', tel: '11 samsung', card: 'crowded'},
    {id: 1803, name: 'Fasfood', tel: '11 samsung', card: 'seis'},
    {id: 3062, name: 'Bomber', tel: '11 samsung', card: 'seis'},
    {id: 3258, name: 'Bomber', tel: '11 samsung', card: 'lili pro'},
    {id: 6136, name: 'Bomber', tel: '11 samsung', card: 'seis'},
    {id: 3922, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 4862, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 6533, name: 'Bomber', tel: '11 samsung', card: 'spruce'},
    {id: 4180, name: 'Bomber', tel: '11 samsung', card: 'seis'},
    {id: '0626', name: 'Bomber', tel: '11 samsung', card: 'lili black'},
    {id: 5099, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 8921, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 1417, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 7661, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 9617, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 2581, name: 'Bomber', tel: '11 samsung', card: ''},
    {id: 1188, name: 'Ira', tel: 'moy samsung', card: 'prospa'},
    {id: 8501, name: 'Ira', tel: 'moy samsung', card: 'seis'},
    {id: 2678, name: 'Ira', tel: 'moy samsung', card: 'skrill'},
    {id: 6689, name: 'Ira', tel: 'moy samsung', card: 'seis'},
    {id: '0670', name: 'Ira', tel: 'moy samsung', card: ''},
    {id: 3583, name: 'Ira', tel: 'moy samsung', card: ''},
    {id: 4150, name: 'Ira', tel: 'moy samsung', card: ''},
    {id: '0115', name: 'Ira', tel: 'moy samsung', card: ''},
    {id: '0902', name: 'Ira', tel: 'moy samsung', card: ''},
    {id: 3259, name: 'Ira', tel: 'moy samsung', card: ''},
    {id: 8783, name: 'Marcin', tel: 'moy samsung', card: 'seis'},
    {id: 6739, name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: 5423, name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: 2282, name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: '0027', name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: '0338', name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: 7388, name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: 2450, name: 'Marcin', tel: 'moy samsung', card: 'wise'},
    {id: 5880, name: 'Marcin', tel: 'moy samsung', card: 'seis'},
    {id: 2901, name: 'Marcin', tel: 'moy samsung', card: ''},
    {id: 6901, name: 'Marcin', tel: 'moy samsung', card: 'bento'},
    {id: 7816, name: 'Marcin', tel: 'moy samsung', card: 'seis'},
    {id: 7754, name: 'Marcin', tel: 'moy samsung', card: 'seis'},
    {id: 8367, name: 'Roman', tel: 'moy samsung', card: 'seis'},
    {id: 4399, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 7884, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 6056, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 7564, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 4231, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 5247, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: '0468', name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 7322, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 7062, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: 6376, name: 'Roman', tel: 'moy samsung', card: ''},
    {id: '0224', name: 'Bomber', tel: 'samsung zolotoy', card: 'seis'},
    {id: 6707, name: 'Bomber', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 1705, name: 'Bomber', tel: 'samsung zolotoy', card: 'seis'},
    {id: 7961, name: 'Bomber', tel: 'samsung zolotoy', card: ''},
    {id: 4529, name: 'Bomber', tel: 'samsung zolotoy', card: 'novo white'},
    {id: '0460', name: 'Bomber', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 5458, name: 'Bomber', tel: 'samsung zolotoy', card: ''},
    {id: 4251, name: 'Bomber', tel: 'samsung zolotoy', card: 'seis'},
    {id: '0416', name: 'Bomber', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 3728, name: 'Bomber', tel: 'samsung zolotoy', card: 'seis'},
    {id: 2598, name: 'Bomber', tel: 'samsung zolotoy', card: ''},
    {id: 9919, name: 'Bomber', tel: 'samsung zolotoy', card: ''},
    {id: 3404, name: 'Darian', tel: 'samsung zolotoy', card: 'seis'},
    {id: 7704, name: 'Darian', tel: 'samsung zolotoy', card: 'novo feoletoviy'},
    {id: 4394, name: 'Darian', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 4721, name: 'Darian', tel: 'samsung zolotoy', card: ''},
    {id: 1197, name: 'Darian', tel: 'samsung zolotoy', card: ''},
    {id: 8079, name: 'Darian', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 5181, name: 'Darian', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 5901, name: 'Darian', tel: 'samsung zolotoy', card: ''},
    {id: '0407', name: 'Darian', tel: 'samsung zolotoy', card: ''},
    {id: 8414, name: 'Darian', tel: 'samsung zolotoy', card: 'seis'},
    {id: 5750, name: 'Darian', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 3509, name: 'Darian', tel: 'samsung zolotoy', card: 'v'},
    {id: 6580, name: 'Darian', tel: 'samsung zolotoy', card: 'sp'},
    {id: 6865, name: 'Darian', tel: 'samsung zolotoy', card: 'sp'},
    {id: 1208, name: 'Jacek', tel: 'samsung zolotoy', card: 'seis'},
    {id: '0607', name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 7835, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 6083, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 2231, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 6048, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 1245, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: '0792', name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 2598, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 5626, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: 6246, name: 'Jacek', tel: 'samsung zolotoy', card: ''},
    {id: '0559', name: 'Jacek', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 1912, name: 'Jacek', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 3897, name: 'Jacek', tel: 'samsung zolotoy', card: 'seis'},
    {id: '0662', name: 'Gabriel', tel: 'samsung zolotoy', card: 'seis'},
    {id: 7407, name: 'Gabriel', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 3093, name: 'Gabriel', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 1287, name: 'Gabriel', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 1272, name: 'Gabriel', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 5054, name: 'Gabriel', tel: 'samsung zolotoy', card: 'seis'},
    {id: 3105, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: 3001, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: 4008, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: 4862, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: 3913, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: 6671, name: 'Gabriel', tel: 'samsung zolotoy', card: ''},
    {id: '0009', name: 'Roman', tel: 'samsung zolotoy', card: 'seis'},
    {id: 2520, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 2051, name: 'Roman', tel: 'samsung zolotoy', card: 'lili pro'},
    {id: 9533, name: 'Roman', tel: 'samsung zolotoy', card: 'lili'},
    {id: 5383, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 8384, name: 'Roman', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 6225, name: 'Roman', tel: 'samsung zolotoy', card: 'seis'},
    {id: 4074, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 3748, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 8890, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: '0776', name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 5173, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 6056, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 9533, name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: '0043', name: 'Roman', tel: 'samsung zolotoy', card: ''},
    {id: 8775, name: 'Marcin', tel: 'samsung zolotoy', card: 'viso ser'},
    {id: 2236, name: 'Marcin', tel: 'samsung zolotoy', card: 'seis'},
    {id: 8326, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 9810, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 3922, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 2618, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 3062, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 6879, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 9829, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 2839, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 2090, name: 'Marcin', tel: 'samsung zolotoy', card: 'lili black'},
    {id: 4851, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 6875, name: 'Marcin', tel: 'samsung zolotoy', card: ''},
    {id: 6181, name: 'Ewa', tel: 'samsung pay', card: 'lili black'},
    {id: 7017, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 6764, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 4482, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 7940, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 3046, name: 'Ewa', tel: 'samsung pay', card: 'seis'},
    {id: '0378', name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 4211, name: 'Ewa', tel: 'samsung pay', card: 'lili pro'},
    {id: 8056, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 6878, name: 'Ewa', tel: 'samsung pay', card: 'seis'},
    {id: 7579, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 9971, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 8628, name: 'Ewa', tel: 'samsung pay', card: ''},
    {id: 8090, name: 'Maxim', tel: 'samsung pay', card: 'seis'},
    {id: 6544, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 2576, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 5864, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 6390, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 4929, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 8375, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 9795, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 5851, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 8799, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 8454, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 1582, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 8640, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 1194, name: 'Maxim', tel: 'samsung pay', card: ''},
    {id: 1593, name: 'Maxim', tel: 'samsung pay', card: 'novo'},
    {id: 3232, name: 'Ruslan', tel: 'samsung pay', card: 'lili pro'},
    {id: 4862, name: 'Ruslan', tel: 'samsung pay', card: 'seis'},
    {id: 5173, name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: 3344, name: 'Ruslan', tel: 'samsung pay', card: 'nine25'},
    {id: 2101, name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: 2150, name: 'Ruslan', tel: 'samsung pay', card: 'lili pro'},
    {id: 8289, name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: '0935', name: 'Ruslan', tel: 'samsung pay', card: 'seis'},
    {id: '0400', name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: 2038, name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: 6860, name: 'Ruslan', tel: 'samsung pay', card: ''},
    {id: 5217, name: 'Ruslan', tel: 'samsung pay', card: 'lili pro'},
    {id: 4736, name: 'Ruslan', tel: 'samsung pay', card: 'seis'},
    {id: '0185', name: 'Marena', tel: 'samsung pay', card: 'seis'},
    {id: 7661, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 4453, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 9279, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 3603, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: '0009', name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 5797, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 8646, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 7520, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: '0299', name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 5689, name: 'Marena', tel: 'samsung pay', card: 'step'},
    {id: 3550, name: 'Marena', tel: 'samsung pay', card: 'sp'},
    {id: 6479, name: 'Marena', tel: 'samsung pay', card: 'seis'},
    {id: 1803, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 3302, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 2112, name: 'Marena', tel: 'samsung pay', card: ''},
    {id: 6044, name: 'pay', tel: 'samsung pay', card: 'sp'},
    {id: 2158, name: 'pay', tel: 'samsung pay', card: 'sp'},
    {id: 7703, name: 'pay', tel: 'samsung pay', card: 'seis'},
    {id: 8093, name: 'pay', tel: 'samsung pay', card: 'novo feoletoviy'},
    {id: '0393', name: 'pay', tel: 'samsung pay', card: 'seis'},
    {id: 9593, name: 'Artur', tel: 'redmi siniy', card: 'lili black'},
    {id: '0616', name: 'Artur', tel: 'redmi siniy', card: ''},
    {id: 4716, name: 'Artur', tel: 'redmi siniy', card: 'seis'},
    {id: 1090, name: 'Artur', tel: 'redmi siniy', card: 'lili black'},
    {id: 9682, name: 'Artur', tel: 'redmi siniy', card: 'wingspan'},
    {id: 7630, name: 'Artur', tel: 'redmi siniy', card: 'zolve'},
    {id: 5675, name: 'Artur', tel: 'redmi siniy', card: 'novo white'},
    {id: 5251, name: 'Artur', tel: 'redmi siniy', card: 'wingspan'},
    {id: 4812, name: 'Artur', tel: 'redmi siniy', card: 'lili pro'},
    {id: 6544, name: 'Artur', tel: 'redmi siniy', card: 'seis'},
    {id: 4446, name: 'Artur', tel: 'redmi siniy', card: ''},
    {id: 4888, name: 'Artur', tel: 'redmi siniy', card: 'v'},
    {id: 4856, name: 'Artur', tel: 'redmi siniy', card: 'v'},
    {id: 1251, name: 'Dawid red', tel: 'redmi siniy', card: 'lili pro'},
    {id: 3935, name: 'Dawid red', tel: 'redmi siniy', card: 'seis'},
    {id: 8207, name: 'Dawid red', tel: 'redmi siniy', card: 'sp'},
    {id: 7619, name: 'Dawid red', tel: 'redmi siniy', card: 'seis'},
    {id: 8422, name: 'Dawid red', tel: 'redmi siniy', card: 'lili pro'},
    {id: 2680, name: 'Dawid red', tel: 'redmi siniy', card: 'seis'},
    {id: 3419, name: 'Dawid red', tel: 'redmi siniy', card: ''},
    {id: '0887', name: 'Dawid red', tel: 'redmi siniy', card: 'lili pro'},
    {id: 9412, name: 'Dawid red', tel: 'redmi siniy', card: 'seis'},
    {id: 9810, name: 'Dawid red', tel: 'redmi siniy', card: ''},
    {id: 6260, name: 'Dawid red', tel: 'redmi siniy', card: ''},
    {id: 5180, name: 'Dawid red', tel: 'redmi siniy', card: ''},
    {id: 9389, name: 'Dawid red', tel: 'redmi siniy', card: ''},
    {id: 3067, name: 'Vladimir', tel: 'redmi siniy', card: 'seis'},
    {id: 5930, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: 5739, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: '0443', name: 'Vladimir', tel: 'redmi siniy', card: 'lili pro'},
    {id: 2766, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: 9043, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: 8916, name: 'Vladimir', tel: 'redmi siniy', card: 'lili black'},
    {id: 4904, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: 1006, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: '0304', name: 'Vladimir', tel: 'redmi siniy', card: 'seis'},
    {id: '0791', name: 'Vladimir', tel: 'redmi siniy', card: 'north one'},
    {id: 6262, name: 'Vladimir', tel: 'redmi siniy', card: 'novo feoletoviy'},
    {id: 1935, name: 'Vladimir', tel: 'redmi siniy', card: 'seis'},
    {id: 7783, name: 'Vladimir', tel: 'redmi siniy', card: ''},
    {id: 8356, name: 'Yurol', tel: 'redmi siniy', card: 'seis'},
    {id: 6674, name: 'Yurol', tel: 'redmi siniy', card: ''},
    {id: '0614', name: 'Yurol', tel: 'redmi siniy', card: ''},
    {id: 6549, name: 'David blue', tel: 'redmi siniy', card: 'lili pro'},
    {id: 7573, name: 'David blue', tel: 'redmi siniy', card: 'seis'},
    {id: 1263, name: 'David blue', tel: 'redmi siniy', card: 'lili pro'},
    {id: 3472, name: 'David blue', tel: 'redmi siniy', card: ''},
    {id: 9412, name: 'David blue', tel: 'redmi siniy', card: 'seis'},
    {id: 4529, name: 'David blue', tel: 'redmi siniy', card: 'novo white'},
    {id: 6552, name: 'David blue', tel: 'redmi siniy', card: 'seis'},
    {id: '0016', name: 'David blue', tel: 'redmi siniy', card: 'lili pro'},
    {id: 2864, name: 'David blue', tel: 'redmi siniy', card: 'seis'},
    {id: 9854, name: 'David blue', tel: 'redmi siniy', card: ''},
    {id: 4900, name: 'David blue', tel: 'redmi siniy', card: ''},
    {id: '0953', name: 'David blue', tel: 'redmi siniy', card: 'lili pro'},
    {id: 6971, name: 'David blue', tel: 'redmi siniy', card: 'seis'},
    {id: '0592', name: 'David blue', tel: 'redmi siniy', card: 'lili black'},
    {id: 8910, name: 'David blue', tel: 'redmi siniy', card: 'lili pro'},
    {id: '0495', name: 'Radam', tel: 'voven miu', card: 'seis'},
    {id: 7760, name: 'Radam', tel: 'voven miu', card: 'lili black'},
    {id: 3823, name: 'Radam', tel: 'voven miu', card: 'lili pro'},
    {id: 7904, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 9462, name: 'Radam', tel: 'voven miu', card: 'seis'},
    {id: 8326, name: 'Radam', tel: 'voven miu', card: 'lili black'},
    {id: 1264, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 6894, name: 'Radam', tel: 'voven miu', card: 'seis'},
    {id: 5307, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 2751, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 9238, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 1569, name: 'Radam', tel: 'voven miu', card: 'lili pro'},
    {id: 9581, name: 'Radam', tel: 'voven miu', card: ''},
    {id: 5512, name: 'Bomber Goala', tel: 'voven miu', card: ''},
    {id: 7902, name: 'Gabriel', tel: 'voven miu', card: 'seis'},
    {id: 2816, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 1566, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 5292, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 8785, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 4289, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: '0027', name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 5423, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 8413, name: 'Gabriel', tel: 'voven miu', card: 'lili black'},
    {id: 8090, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 7290, name: 'Gabriel', tel: 'voven miu', card: 'seis'},
    {id: 1010, name: 'Gabriel', tel: 'voven miu', card: ''},
    {id: 7126, name: 'Gabriel', tel: 'voven miu', card: 'novo feoletoviy'},
    {id: 5002, name: 'Gabriel', tel: 'voven miu', card: 'lili black'},
    {id: 9246, name: 'Marcin', tel: 'voven miu', card: 'seis'},
    {id: 1334, name: 'Marcin', tel: 'voven miu', card: 'crowded'},
    {id: 7251, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 5280, name: 'Marcin', tel: 'voven miu', card: 'lili black'},
    {id: 9614, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 8582, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 3903, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 5883, name: 'Marcin', tel: 'voven miu', card: 'seis'},
    {id: 7305, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 6515, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 9903, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 3637, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 5540, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 6517, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: '0063', name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 4440, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: 6556, name: 'Marcin', tel: 'voven miu', card: ''},
    {id: '0517', name: '', tel: 'voven miu', card: 'lili pro'},
    {id: 3357, name: 'Kit', tel: 'voven miu', card: 'seis'},
    {id: 8069, name: 'Kit', tel: 'voven miu', card: ''},
    {id: 5853, name: 'Kit', tel: 'voven miu', card: 'nine25'},
    {id: 8181, name: 'Kit', tel: 'voven miu', card: 'novo feoletoviy'},
    {id: 2459, name: 'Kit', tel: 'voven miu', card: 'lili black'},
    {id: 7417, name: 'Kit', tel: 'voven miu', card: 'nine25'},
    {id: 5251, name: 'Kit', tel: 'voven miu', card: ''},
    {id: 8093, name: 'Kit', tel: 'voven miu', card: 'novo feoletoviy'},
    {id: 5750, name: 'Kit', tel: 'voven miu', card: 'nine25'},
    {id: 4150, name: 'Kit', tel: 'voven miu', card: 'seis'},
    {id: 7218, name: 'Kit', tel: 'voven miu', card: 'novo feoletoviy'},
    {id: 5710, name: 'Kit', tel: 'voven miu', card: ''},
    {id: 3731, name: 'Kit', tel: 'voven miu', card: 'albert'},
    {id: 6857, name: 'Crzegost', tel: 'voven miu', card: 'sp'},
    {id: 8007, name: 'Crzegost', tel: 'voven miu', card: 'seis'},
    {id: 5458, name: 'Crzegost', tel: 'voven miu', card: 'lili pro'},
    {id: '0792', name: 'Crzegost', tel: 'voven miu', card: 'seis'},
    {id: 5575, name: 'Crzegost', tel: 'voven miu', card: 'v'},
    {id: 3913, name: 'Crzegost', tel: 'voven miu', card: 'seis'},
    {id: 1736, name: 'Crzegost', tel: 'voven miu', card: ''},
    {id: 1876, name: 'Crzegost', tel: 'voven miu', card: ''},
    {id: 5251, name: 'Crzegost', tel: 'voven miu', card: 'wingspan'},
    {id: 2995, name: 'Crzegost', tel: 'voven miu', card: ''},
    {id: 4744, name: 'Crzegost', tel: 'voven miu', card: 'seis'},
    {id: 3142, name: 'Crzegost', tel: 'voven miu', card: 'sp'},
    {id: 4285, name: 'Crzegost', tel: 'voven miu', card: 'seis'},
    {id: 1393, name: 'Crzegost', tel: 'voven miu', card: 'sp'},
    {id: 2892, name: 'BonBuason', tel: 'voven miu', card: 'lili pro'},
    {id: 2308, name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: 5092, name: 'BonBuason', tel: 'voven miu', card: 'lili black'},
    {id: 8263, name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: 3058, name: 'BonBuason', tel: 'voven miu', card: 'seis'},
    {id: 3290, name: 'BonBuason', tel: 'voven miu', card: 'sp'},
    {id: 2580, name: 'BonBuason', tel: 'voven miu', card: 'seis'},
    {id: 5210, name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: 1371, name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: '0812', name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: '0428', name: 'BonBuason', tel: 'voven miu', card: ''},
    {id: 3493, name: 'Bomber', tel: 'voven miu', card: 'lili black'},
    {id: 6373, name: 'Bomber', tel: 'voven miu', card: ''},
    {id: '0118', name: 'Bomber', tel: 'voven miu', card: 'lili pro'},
    {id: 4225, name: 'Bomber', tel: 'voven miu', card: ''},
    {id: '0608', name: 'Bomber', tel: 'voven miu', card: 'seis'},
    {id: '0332', name: 'Bomber', tel: 'voven miu', card: ''},
    {id: 5703, name: 'Bomber', tel: 'voven miu', card: 'lili pro'},
    {id: '0676', name: 'Bomber', tel: 'voven miu', card: ''},
    {id: 5864, name: 'Bomber', tel: 'voven miu', card: 'seis'},
    {id: 5670, name: 'Bomber', tel: 'voven miu', card: ''},
    {id: 7680, name: 'Bomber', tel: 'voven miu', card: ''},
    {id: 4253, name: 'Bomber', tel: 'voven miu', card: ''},
    {id: '0207', name: 'Bomber', tel: 'voven miu', card: ''},
    {id: 8467, name: 'Volodymyr', tel: 'voven miu', card: 'seis'},
    {id: 6116, name: 'Volodymyr', tel: 'voven miu', card: ''},
    {id: 7956, name: 'Volodymyr', tel: 'voven miu', card: ''},
    {id: 4578, name: 'Volodymyr', tel: 'voven miu', card: ''},
    {id: 7683, name: 'Volodymyr', tel: 'voven miu', card: ''},
    {id: 2393, name: 'RockAra', tel: 'voven red siniy', card: 'lili pro'},
    {id: 2389, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 4522, name: 'RockAra', tel: 'voven red siniy', card: 'seis'},
    {id: 3238, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 2019, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 5995, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 4289, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 7577, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 7043, name: 'RockAra', tel: 'voven red siniy', card: 'lili black'},
    {id: 5694, name: 'RockAra', tel: 'voven red siniy', card: 'lili pro'},
    {id: 7794, name: 'RockAra', tel: 'voven red siniy', card: 'wingspan'},
    {id: 3786, name: 'RockAra', tel: 'voven red siniy', card: 'v'},
    {id: '0474', name: 'RockAra', tel: 'voven red siniy', card: 'seis'},
    {id: 3978, name: 'RockAra', tel: 'voven red siniy', card: ''},
    {id: 9796, name: 'Marena', tel: 'voven red siniy', card: 'lili black'},
    {id: 6610, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 4318, name: 'Marena', tel: 'voven red siniy', card: 'lili pro'},
    {id: 9961, name: 'Marena', tel: 'voven red siniy', card: 'lili black'},
    {id: '0411', name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: '0434', name: 'Marena', tel: 'voven red siniy', card: 'seis'},
    {id: 8596, name: 'Marena', tel: 'voven red siniy', card: 'lili pro'},
    {id: '0731', name: 'Marena', tel: 'voven red siniy', card: 'wingspan'},
    {id: 2878, name: 'Marena', tel: 'voven red siniy', card: 'nine25'},
    {id: 8151, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 8869, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 6291, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: '0115', name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 8759, name: 'Marena', tel: 'voven red siniy', card: 'seis'},
    {id: 6954, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 5585, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 5034, name: 'Marena', tel: 'voven red siniy', card: 'lili black'},
    {id: 9990, name: 'Marena', tel: 'voven red siniy', card: 'seis'},
    {id: 3575, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 3295, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 6516, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 9521, name: 'Marena', tel: 'voven red siniy', card: 'sp'},
    {id: 4355, name: 'Marena', tel: 'voven red siniy', card: 'lili black'},
    {id: 6970, name: 'Marena', tel: 'voven red siniy', card: 'lili pro'},
    {id: 2560, name: 'Marena', tel: 'voven red siniy', card: 'nine25'},
    {id: 4791, name: 'Marena', tel: 'voven red siniy', card: ''},
    {id: 4124, name: 'Girgiy', tel: 'voven red siniy', card: 'wingspan'},
    {id: 5458, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 8799, name: 'Girgiy', tel: 'voven red siniy', card: 'seis'},
    {id: 7482, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 8570, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 1020, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 4342, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 5842, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 1951, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 5477, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: 5389, name: 'Girgiy', tel: 'voven red siniy', card: ''},
    {id: '0432', name: 'FasFood', tel: 'voven red siniy', card: 'seis'},
    {id: 1700, name: 'FasFood', tel: 'voven red siniy', card: ''},
    {id: 8844, name: 'FasFood', tel: 'voven red siniy', card: ''},
    {id: '0207', name: 'FasFood', tel: 'voven red siniy', card: 'lili pro'},
    {id: 5173, name: 'Grambler', tel: 'voven red siniy', card: 'seis'},
    {id: 2995, name: 'Grambler', tel: 'voven red siniy', card: ''},
    {id: 6216, name: 'Grambler', tel: 'voven red siniy', card: ''},
    {id: 7168, name: 'Grambler', tel: 'voven red siniy', card: ''},
    {id: 2966, name: 'Maksstroi', tel: 'noviy', card: 'millenium'},
    {id: 7159, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 8467, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 5585, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 2236, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 3603, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: '0684', name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 9191, name: 'Liha', tel: 'noviy', card: 'seis'},
    {id: 3055, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 6829, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 1668, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: '0352', name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 9195, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 8123, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 4587, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 4512, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 3238, name: 'Petr', tel: 'noviy', card: 'seis'},
    {id: 6625, name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: 5579, name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: 8840, name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: 3234, name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: '0009', name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: 5594, name: 'Orina', tel: 'noviy', card: 'seis'},
    {id: 3871, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 1616, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 6017, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 7489, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 3315, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 4463, name: '', tel: 'iphone yellow', card: 'seis'},
    {id: '0418', name: '', tel: 'iphone yellow', card: 'seis'},
    {id: 9876, name: '', tel: 'iphone white', card: 'seis'},
    {id: 6625, name: '', tel: 'iphone white', card: 'seis'},
    {id: 9801, name: '', tel: 'iphone white', card: 'seis'},
    {id: 2500, name: '', tel: 'iphone white', card: 'seis'},
    {id: 9191, name: '', tel: 'iphone white', card: 'seis'},
    {id: 5217, name: '', tel: 'iphone white', card: 'lili pro'},
    {id: 5555, name: '', tel: 'iphone white', card: 'lili'},
    {id: 4620, name: '', tel: 'iphone white', card: 'lili pro'},
    {id: 4862, name: '', tel: 'iphone chehol', card: 'seis'},
    {id: 5579, name: '', tel: 'iphone chehol', card: 'seis'},
    {id: 2732, name: '', tel: 'iphone chehol', card: 'seis'},
    {id: 9073, name: '', tel: 'iphone chehol', card: 'seis'},
    {id: 4726, name: '', tel: 'iphone chehol', card: 'seis'},
    {id: 9876, name: '', tel: 'iphone chehol', card: 'seis'},
]

function App() {
    return (
        <div className="App">
            <DataFilter data={data} />
        </div>
    );
}

export default App;
