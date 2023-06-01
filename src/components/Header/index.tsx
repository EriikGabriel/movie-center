"use client";

import { Clapperboard, UserCircle2 } from "lucide-react";
import { Container, LogoWrapper, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Clapperboard height={40} width={40} />
        <h2>Movie Center</h2>
      </LogoWrapper>
      <Profile>
        <UserCircle2 height={40} width={40} />
      </Profile>
    </Container>
  );
}
