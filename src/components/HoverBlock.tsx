import React from 'react';
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
const HoverBlock = () => {
  return (
    <Group justify="center">
      <HoverCard
        width={80}
        shadow="md"
        withArrow
        openDelay={200}
        closeDelay={400}
      >
        <HoverCard.Target>
          <Avatar
            src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4"
            radius="xl"
          />
          {/* <IoIosArrowDown /> */}
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Stack gap={5}>
              <Link to={'/register'}>Register</Link>
              <Link to={'/login'}>Login</Link>
            </Stack>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};

export default HoverBlock;
