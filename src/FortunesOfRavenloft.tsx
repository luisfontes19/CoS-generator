import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledTableCell, StyledTableRow } from "./components/Table";
import { getRandomCard, getRandomHighDeckCard } from "./TarokkaCardsUtils";

const FortunesOfRavenloft = () => {

  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => readFortuneClick(), [])

  const readFortuneClick = () => {
    const reading: string[] = [];
    let card;

    for (let i = 0; i < 3; i++) {
      do {
        card = getRandomCard();
      } while (reading.includes(card))
      reading.push(card)
    }

    for (let i = 0; i < 2; i++) {
      do {
        card = getRandomHighDeckCard();
      } while (reading.includes(card))
      reading.push(card)
    }

    setCards(reading);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <TableContainer component={Paper} sx={{ maxWidth: "400px" }}>
        <Table >
          <TableHead>
            <TableRow>
              <StyledTableCell>What</StyledTableCell>
              <StyledTableCell>Card</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <StyledTableRow>
              <StyledTableCell>The Tome Of Strahd</StyledTableCell>
              <StyledTableCell>{cards[0]}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>The Holy Symbol of Ravenkind</StyledTableCell>
              <StyledTableCell>{cards[1]}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>The Sunsword</StyledTableCell>
              <StyledTableCell>{cards[2]}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Strahd's Enemy</StyledTableCell>
              <StyledTableCell>{cards[3]}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>Strahd</StyledTableCell>
              <StyledTableCell>{cards[4]}</StyledTableCell>
            </StyledTableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" onClick={readFortuneClick}>Read Fortune Again</Button>
      </div>
    </div>
  );
}

export default FortunesOfRavenloft;
