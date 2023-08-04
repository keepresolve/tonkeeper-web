import { TronEvent } from '@tonkeeper/core/dist/tronApi';
import React, { FC } from 'react';
import { ListItem } from '../../List';
import { ProgressIcon } from '../ActivityLayout';
import { TronActivityAction } from './TronActivityAction';

export const TronActivityGroup: FC<{
    event: TronEvent;
    date: string;
    timestamp: number;
}> = ({ event, date, timestamp }) => {
    return (
        <>
            {event.actions.map((action, index) => (
                <ListItem
                    key={index}
                    onClick={
                        () => {}
                        // setActivity({
                        //     isScam: event.isScam,
                        //     action,
                        //     timestamp: timestamp,
                        //     event
                        // })
                    }
                >
                    <TronActivityAction action={action} date={date} />
                    {event.inProgress && <ProgressIcon />}
                </ListItem>
            ))}
        </>
    );
};
