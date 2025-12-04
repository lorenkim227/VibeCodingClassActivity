# Memory/Concentration Card Game - Project Plan

## Project Overview
**Project Name:** Memory Match Card Game  
**Duration:** 60 minutes  
**Methodology:** Iterative development with 4 x 15-minute sprints  
**Technology Stack:** Vanilla JavaScript, HTML5, CSS3

---

## Development Approach

Each iteration follows this cycle:
1. **Plan** (2 min) - Review tasks and success criteria
2. **Code** (10 min) - Implement features
3. **Test** (3 min) - Manual testing and bug fixes

---

## Iteration Breakdown

### Iteration 1: Basic Game Board & Card Flipping (0-15 min)

**Objective:** Create a functional card grid with flip interactions

**Tasks:**
- [ ] Set up HTML structure (game container, card grid)
- [ ] Create 16 card elements in a 4x4 grid
- [ ] Style cards with CSS (dimensions, colors, borders)
- [ ] Implement face-down and face-up states
- [ ] Add click event listener to flip cards
- [ ] Apply CSS transition for smooth flip animation

**Deliverables:**
- Clickable 4x4 card grid
- Visual flip animation
- Basic styling complete

**Testing Checklist:**
- All 16 cards display correctly
- Cards flip when clicked
- Animation is smooth
- Cards are visually distinct when flipped

---

### Iteration 2: Matching Logic (15-30 min)

**Objective:** Implement core game mechanics for matching pairs

**Tasks:**
- [ ] Initialize game state object (flippedCards array, matchedPairs array)
- [ ] Create card shuffling algorithm
- [ ] Assign values to cards (8 pairs of matching values)
- [ ] Implement two-card selection limit
- [ ] Add match detection logic
- [ ] Handle matched pairs (disable clicks, keep face-up)
- [ ] Handle non-matches (flip back after 1 second delay)
- [ ] Prevent clicking already matched cards

**Deliverables:**
- Functional matching system
- Randomized card positions
- Proper game flow

**Testing Checklist:**
- Cards shuffle on page load
- Only 2 cards can be flipped at once
- Matching pairs stay face-up
- Non-matching pairs flip back after delay
- Matched cards cannot be clicked again
- No bugs with rapid clicking

---

### Iteration 3: Win Condition & Game Stats (30-45 min)

**Objective:** Add game completion tracking and player feedback

**Tasks:**
- [ ] Create moves counter variable
- [ ] Display moves counter in UI
- [ ] Increment moves on each pair attempt
- [ ] Create timer functionality (start/stop)
- [ ] Display timer in UI
- [ ] Start timer on first card flip
- [ ] Implement win detection (check if all pairs matched)
- [ ] Create win modal/message
- [ ] Display final stats in win message (moves, time)
- [ ] Stop timer when game is won

**Deliverables:**
- Move counter display
- Game timer
- Win screen with statistics

**Testing Checklist:**
- Move counter updates correctly
- Timer starts on first flip
- Timer displays in MM:SS format
- Win condition triggers correctly
- Win screen shows accurate stats
- Timer stops when game ends

---

### Iteration 4: Reset & Polish (45-60 min)

**Objective:** Add replay functionality and enhance user experience

**Tasks:**
- [ ] Create "New Game" button
- [ ] Implement reset function (clear state, reshuffle, reset timer/moves)
- [ ] Add difficulty selector UI (dropdown or buttons)
- [ ] Implement difficulty settings:
  - Easy: 4x4 (16 cards, 8 pairs)
  - Medium: 4x6 (24 cards, 12 pairs)
  - Hard: 6x6 (36 cards, 18 pairs)
- [ ] Adjust grid layout based on difficulty
- [ ] Add hover effects to cards
- [ ] Improve animations (matched cards, win screen)
- [ ] Make layout responsive for mobile
- [ ] Polish colors and typography
- [ ] Add card back design/pattern

**Deliverables:**
- New Game functionality
- Multiple difficulty levels
- Polished, responsive UI
- Enhanced visual effects

**Testing Checklist:**
- New Game button resets everything
- All difficulty levels work correctly
- Grid adjusts properly for each difficulty
- Game is playable on mobile devices
- All animations work smoothly
- No visual glitches
- Complete end-to-end game flow works

---

## Risk Management

**Potential Challenges:**
- **Time constraints:** 15 minutes per iteration is tight
  - *Mitigation:* Focus on core functionality first, skip optional features
- **Animation timing issues:** Flipping logic may conflict with animations
  - *Mitigation:* Use proper async handling and disable clicks during animations
- **State management complexity:** Tracking game state can get messy
  - *Mitigation:* Keep state object simple and centralized

---

## Success Metrics

**Minimum Viable Product (MVP):**
- ✓ Functional 4x4 memory game
- ✓ Cards flip and match correctly
- ✓ Win condition works
- ✓ Can restart game

**Stretch Goals (if time permits):**
- Multiple difficulty levels
- Sound effects
- High score tracking (localStorage)
- Animations and polish

---

## Post-Development

**Future Enhancements:**
- Multiplayer mode (turn-based)
- Leaderboard with localStorage
- Custom card themes (animals, flags, emojis)
- Best time tracking per difficulty
- Accessibility improvements (keyboard navigation, screen reader support)

---

## Timeline Summary

| Time | Iteration | Focus |
|------|-----------|-------|
| 0-15 min | 1 | Display & Flip |
| 15-30 min | 2 | Matching Logic |
| 30-45 min | 3 | Stats & Win |
| 45-60 min | 4 | Reset & Polish |

---

## Notes
- Prioritize functionality over perfection
- Test frequently to catch bugs early
- Keep code simple and readable
- Document any known issues for future improvement