import "./index.css";
import { gsap, useGSAP } from "@/libs/gsapSetup";

export default function StaggeredPhysics() {
  
  useGSAP(
    () => {
      const grid = document.querySelector('.grid');
      const rows = [...document.querySelectorAll('.row')];
      const cells = [...document.querySelectorAll('.cell')];
    
      let clicked = false;
      let reset_all = false;
    
      const pull_distance = 70;
    
      const updateCellPositions = () => {
        cells.forEach((cell) => {
          const rect = cell.getBoundingClientRect();
          cell.center_position = {
            x: (rect.left + rect.right) / 2,
            y: (rect.top + rect.bottom) / 2,
          };
        });
      };
    
      const handleCellClick = (e, i) => {
        if (clicked) {
          return;
        }
    
        clicked = true;
    
        gsap.to('.cell', {
          duration: 1.6,
          physics2D: {
            velocity: 'random(400, 1000)',
            angle: 'random(250, 290)',
            gravity: 2000
          },
          stagger: {
            grid: [rows.length, rows[0].children.length],
            from: i,
            amount: 0.3
          },
          onComplete: function () {
            this.timeScale(-1.3);
          },
          onReverseComplete: () => {
            clicked = false;
            reset_all = true;
            handlePointerMove();
          },
        });
      };
    
      const handlePointerMove = (e = { x: -pull_distance, y: -pull_distance }) => {
        if (clicked) {
          return;
        }
    
        const { pageX: pointer_x, pageY: pointer_y } = e;
        cells.forEach((cell, i) => {
          const diff_x = pointer_x - cell.center_position.x;
          const diff_y = pointer_y - cell.center_position.y;
          const distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
    
          if (distance < pull_distance) {
            const percent = distance / pull_distance; // Should probably be 1 - distance / pull_distance but I like this effect better
            cell.pulled = true;
            gsap.to(cell, {
              duration: 0.2,
              x: diff_x * percent,
              y: diff_y * percent,
            });
          } else {
            if (!cell.pulled) {
              return;
            }
    
            cell.pulled = false;
    
            gsap.to(cell, {
              duration: 1,
              x: 0,
              y: 0,
              ease: "elastic.out(1, 0.3)",
            });
          }
        });
    
        if (reset_all) {
          reset_all = false;
          gsap.to(cells, {
            duration: 1,
            x: 0,
            y: 0,
            ease: "elastic.out(1, 0.3)",
          });
        }
      };
    
      const init = () => {
        updateCellPositions();
        window.addEventListener('resize', updateCellPositions);
        window.addEventListener('pointermove', handlePointerMove);
        document.body.addEventListener('pointerleave', () => handlePointerMove());
    
        cells.forEach((cell, i) =>
          cell.addEventListener('pointerup', (e) => handleCellClick(e, i))
        );
      };
    
      init();
      
    }
  );

  return (
    <div className="gridWrap">
      <div className="grid">
        <div className="row">
          <div className="cell" data-x="0" data-y="0"></div>
          <div className="cell" data-x="0" data-y="1"></div>
          <div className="cell" data-x="0" data-y="2"></div>
          <div className="cell" data-x="0" data-y="3"></div>
          <div className="cell" data-x="0" data-y="4"></div>
          <div className="cell" data-x="0" data-y="5"></div>
          <div className="cell" data-x="0" data-y="6"></div>
          <div className="cell" data-x="0" data-y="7"></div>
          <div className="cell" data-x="0" data-y="8"></div>
          <div className="cell" data-x="0" data-y="9"></div>
          <div className="cell" data-x="0" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="1" data-y="0"></div>
          <div className="cell" data-x="1" data-y="1"></div>
          <div className="cell" data-x="1" data-y="2"></div>
          <div className="cell" data-x="1" data-y="3"></div>
          <div className="cell" data-x="1" data-y="4"></div>
          <div className="cell" data-x="1" data-y="5"></div>
          <div className="cell" data-x="1" data-y="6"></div>
          <div className="cell" data-x="1" data-y="7"></div>
          <div className="cell" data-x="1" data-y="8"></div>
          <div className="cell" data-x="1" data-y="9"></div>
          <div className="cell" data-x="1" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="2" data-y="0"></div>
          <div className="cell" data-x="2" data-y="1"></div>
          <div className="cell" data-x="2" data-y="2"></div>
          <div className="cell" data-x="2" data-y="3"></div>
          <div className="cell" data-x="2" data-y="4"></div>
          <div className="cell" data-x="2" data-y="5"></div>
          <div className="cell" data-x="2" data-y="6"></div>
          <div className="cell" data-x="2" data-y="7"></div>
          <div className="cell" data-x="2" data-y="8"></div>
          <div className="cell" data-x="2" data-y="9"></div>
          <div className="cell" data-x="2" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="3" data-y="0"></div>
          <div className="cell" data-x="3" data-y="1"></div>
          <div className="cell" data-x="3" data-y="2"></div>
          <div className="cell" data-x="3" data-y="3"></div>
          <div className="cell" data-x="3" data-y="4"></div>
          <div className="cell" data-x="3" data-y="5"></div>
          <div className="cell" data-x="3" data-y="6"></div>
          <div className="cell" data-x="3" data-y="7"></div>
          <div className="cell" data-x="3" data-y="8"></div>
          <div className="cell" data-x="3" data-y="9"></div>
          <div className="cell" data-x="3" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="4" data-y="0"></div>
          <div className="cell" data-x="4" data-y="1"></div>
          <div className="cell" data-x="4" data-y="2"></div>
          <div className="cell" data-x="4" data-y="3"></div>
          <div className="cell" data-x="4" data-y="4"></div>
          <div className="cell" data-x="4" data-y="5"></div>
          <div className="cell" data-x="4" data-y="6"></div>
          <div className="cell" data-x="4" data-y="7"></div>
          <div className="cell" data-x="4" data-y="8"></div>
          <div className="cell" data-x="4" data-y="9"></div>
          <div className="cell" data-x="4" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="5" data-y="0"></div>
          <div className="cell" data-x="5" data-y="1"></div>
          <div className="cell" data-x="5" data-y="2"></div>
          <div className="cell" data-x="5" data-y="3"></div>
          <div className="cell" data-x="5" data-y="4"></div>
          <div className="cell" data-x="5" data-y="5"></div>
          <div className="cell" data-x="5" data-y="6"></div>
          <div className="cell" data-x="5" data-y="7"></div>
          <div className="cell" data-x="5" data-y="8"></div>
          <div className="cell" data-x="5" data-y="9"></div>
          <div className="cell" data-x="5" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="6" data-y="0"></div>
          <div className="cell" data-x="6" data-y="1"></div>
          <div className="cell" data-x="6" data-y="2"></div>
          <div className="cell" data-x="6" data-y="3"></div>
          <div className="cell" data-x="6" data-y="4"></div>
          <div className="cell" data-x="6" data-y="5"></div>
          <div className="cell" data-x="6" data-y="6"></div>
          <div className="cell" data-x="6" data-y="7"></div>
          <div className="cell" data-x="6" data-y="8"></div>
          <div className="cell" data-x="6" data-y="9"></div>
          <div className="cell" data-x="6" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="7" data-y="0"></div>
          <div className="cell" data-x="7" data-y="1"></div>
          <div className="cell" data-x="7" data-y="2"></div>
          <div className="cell" data-x="7" data-y="3"></div>
          <div className="cell" data-x="7" data-y="4"></div>
          <div className="cell" data-x="7" data-y="5"></div>
          <div className="cell" data-x="7" data-y="6"></div>
          <div className="cell" data-x="7" data-y="7"></div>
          <div className="cell" data-x="7" data-y="8"></div>
          <div className="cell" data-x="7" data-y="9"></div>
          <div className="cell" data-x="7" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="8" data-y="0"></div>
          <div className="cell" data-x="8" data-y="1"></div>
          <div className="cell" data-x="8" data-y="2"></div>
          <div className="cell" data-x="8" data-y="3"></div>
          <div className="cell" data-x="8" data-y="4"></div>
          <div className="cell" data-x="8" data-y="5"></div>
          <div className="cell" data-x="8" data-y="6"></div>
          <div className="cell" data-x="8" data-y="7"></div>
          <div className="cell" data-x="8" data-y="8"></div>
          <div className="cell" data-x="8" data-y="9"></div>
          <div className="cell" data-x="8" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="9" data-y="0"></div>
          <div className="cell" data-x="9" data-y="1"></div>
          <div className="cell" data-x="9" data-y="2"></div>
          <div className="cell" data-x="9" data-y="3"></div>
          <div className="cell" data-x="9" data-y="4"></div>
          <div className="cell" data-x="9" data-y="5"></div>
          <div className="cell" data-x="9" data-y="6"></div>
          <div className="cell" data-x="9" data-y="7"></div>
          <div className="cell" data-x="9" data-y="8"></div>
          <div className="cell" data-x="9" data-y="9"></div>
          <div className="cell" data-x="9" data-y="10"></div>
        </div>
        <div className="row">
          <div className="cell" data-x="10" data-y="0"></div>
          <div className="cell" data-x="10" data-y="1"></div>
          <div className="cell" data-x="10" data-y="2"></div>
          <div className="cell" data-x="10" data-y="3"></div>
          <div className="cell" data-x="10" data-y="4"></div>
          <div className="cell" data-x="10" data-y="5"></div>
          <div className="cell" data-x="10" data-y="6"></div>
          <div className="cell" data-x="10" data-y="7"></div>
          <div className="cell" data-x="10" data-y="8"></div>
          <div className="cell" data-x="10" data-y="9"></div>
          <div className="cell" data-x="10" data-y="10"></div>
        </div>
      </div>
    </div>
  );
}
